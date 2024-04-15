const request = require("supertest");
const app = require("../../app");
const { connectToMongo, disconnectToMongo } = require("../../services/db");

const URL = "/v1/products";
const validProductId = "sadsadadsaweresf";
const invalidProductId = "fjhafkjhadkjhflkjadshf";
// add mocks here
// mock database 
// mock authentication

describe("tests for /products",() => {
    beforeAll(async () => {
        await connectToMongo()
    })
    afterAll(async () => {
        await disconnectToMongo()
    })
    
    describe("test GET / and /:id",async () => {
        const requestedProduct = {} // change

        it("should respond with 200",async () => {
            await request(app)
            .get(URL)
            .expect(200)
            .expect("Content-Type",/json/);
        })
        it("should respond with 200(/:id)",async () => {
            const response = await request(app)
            .get(`${URL}/${validProductId}`)
            .expect(200);

            expect(response.body).toMatchObject(requestedProduct);
        })
        it("should respond with 404 invalid product id",async () => {
            const response = await request(app)
            .get(`${URL}/${invalidProductId}`)
            .expect(404)

            expect(response.body.msg).toMatch("invalid product id");
        })
    })

    describe("test POST /add",async () => {
        const mockProductComplete = {
            name: "Mock Product",
            description: "This is a mock product description.",
            images: ["image1.jpg", "image2.jpg", "image3.jpg"],
            thumbnail: "thumbnail.jpg",
            sku: 123456789,
            category: "electronics",
            brand: "Mock Brand",
            price: 99.99,
            freeShipping: true,
            stock: 100
        };
        const mockProductIncomplete = {
            name: "Mock Product",
            description: "This is a mock product description.",
            sku: 123456789,
            category: "electronics",
            brand: "Mock Brand",
            price: 99.99,
            freeShipping: true,
            stock: 100
        };

        it("should respond with 200",async () => {
            await request(app)
            .post(`${URL}/add`)
            .send(mockProductComplete)
            .expect(200)
            .expect("Content-Type",/json/)
        })
        it("should respond with 400",async () => {
            await request(app)
            .post(`${URL}/add`)
            .send(mockProductIncomplete)
            .expect(400)
            .expect("Content-Type",/json/)
        })
    })

    describe("test POST /update", async () => {
        const validUpdates = {
            name: "newName", //change
        };

        it("should return with 200",async () => {
            await request(app)
            .post(`${URL}/update/${validProductId}`)
            .send(validUpdates)
            .expect(200)
            .expect("Content-Type",/json/)
        })
        it("should return with 400 details missing",async () => {
            const response = await request(app)
            .post(`${URL}/update/${validProductId}`)
            .expect(400);
            expect(response.body.msg).toMatch("products details missing");
        })
        it("should return with 404 invalid ID",async () => {
            const response = await request(app)
            .post(`${URL}/update/${invalidProductId}`)
            .send(validUpdates)
            .expect(404);
            expect(response.body.msg).toMatch("invalid product id");
        })
        it("should return with 404 nothing to update",async () => {
            const response = await request(app)
            .post(`${URL}/update/${validProductId}`)
            .send(validUpdates)
            .expect(404)
            expect(response.body.msg).toMatch("nothing to update")
        })
    })
})