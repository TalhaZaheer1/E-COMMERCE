import { useState } from "react"
import { useParams } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import Circle from '@uiw/react-color-circle';
import { useSelector, useDispatch } from "react-redux";
import { colorNameToHex, hexToColorName } from "../../utils/colorChanger";
import UseAnimation from 'react-useanimations';
import plusToX from 'react-useanimations/lib/plusToX'

import { setCartOpen } from "../../store/user/actions";
import "./product.css"


const product = {
    title: "AXOLO LINEN SNEAKERS",
    gender: "women",
    available: true,
    colors: {
        classic: [
            "blue",
            "beige",
            "pink",
            "white",
            "lightgrey",
        ],
        limited: [
            "yellow",
        ]
    },
    variants: [
        {
            name: "AXOLO-LINEN BAIGE",
            price: "134.00",
            color: {
                title: "blue",
                type: "classic"
            },
            images: [""],
            sizes: [
                {
                    title: 41,
                    available: true
                },
                {
                    title: 42,
                    available: false
                }, {
                    title: 43,
                    available: true
                }, {
                    title: 44,
                    available: true
                }, {
                    title: 45,
                    available: false
                }, {
                    title: 46,
                    available: true
                },
            ]
        }
    ],
    description: {
        imageSet: [
            {
                title: "Robust canvas",
                image: ""
            }
        ],
        specs: [
            {
                title: "French linen",
                desc: "Breathable,comfortable,soft"
            },
            {
                title: "Designed to last a long time",
                desc: "Strong canvas weave"
            },
            {
                title: "Waterproofed",
                desc: "To accompany you everywhere even on a rainy day"
            },
            {
                title: "Outsole - Natural and recycled rubber",
                desc: "Soft, non-slip and comfortable"
            },
            {
                title: "Drytech™",
                desc: "Removable & ergonomic insole"
            },

        ],
        info: [
            {
                title: "Shipping & Return",
                subHeadings: [
                    {
                        title: "Return",
                        header: "The return is offered in Pakistan",
                        para: "Preparation: your order will be prepared within 1 to 3 working days.Delivery: once prepared, your order will be sent within 24 to 72 working hours to your home or to a relay point according to your preference."
                    },
                    {
                        title: "",
                        header: "We recommend washing by hand",
                        para: ""
                    }
                ]
            }
        ],
        detailedSpecs: [
            {
                image: "",
                title: "",
                subHeadings: [
                    {
                        header: "",
                        para: ""
                    }
                ]
            }
        ]
    },
    reviews: {
        rating: 95,
        all: []
    }
}

function ProductInfo(/*{product}*/) {
    const dispatch = useDispatch()
    const { paramColor } = useParams()
    const [selectedColor, setSelectedColor] = useState(paramColor || product.colors.classic[0])
    const variant = product.variants.find(variant => variant.color.title.toLowerCase() === selectedColor.toLocaleLowerCase()) || { sizes: [] }
    const [selectedSize, setSelectedSize] = useState(variant.sizes[0]?.title || 41)
    const cartOpen = useSelector(state => state.cartOpen);

    return (
        <article className="pt-24 ">
            <div className="px-5 text-[#212322]">
                <h1 className="text-[1.4rem] font-bold">{product.title}</h1>
                <h2 className="text-[#898989] text-opacity-70 font-semibold">{selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</h2>
                <div className="flex gap-3">
                    <ReactStars edit={false} value={product.reviews.rating} color={"#000000"} />
                    <p className="font-semibold text-black text-opacity-60">{product.reviews.all.length + " "} Reviews</p>
                </div>
                <h2 className="font-semibold text-[1.3rem] my-2">${variant.price}</h2>
                <div className="flex items-center mb-4">
                    <div className="mr-4">
                        <h3 className="font-semibold text-sm text-black text-opacity-60 mb-3">Classic</h3>
                        <Circle
                            colors={product.colors.classic.map(color => colorNameToHex(color))}
                            color={colorNameToHex(selectedColor)}
                            onChange={(color) => {
                                console.log(color)
                                setSelectedColor(hexToColorName(color.hex))
                            }}
                            pointProps={{
                                style: {
                                    marginRight: 10,
                                    width: 25,
                                    height: 25,
                                    borderRadius: 100,
                                    borderWidth: 2,
                                }
                            }}
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-black text-opacity-60 mb-3">Limited</h3>
                        <Circle
                            colors={product.colors.limited.map(color => colorNameToHex(color))}
                            color={colorNameToHex(selectedColor)}
                            onChange={(color) => {
                                console.log(color)
                                setSelectedColor(hexToColorName(color.hex))
                            }}
                            pointProps={{
                                style: {
                                    marginRight: 10,
                                    width: 25,
                                    height: 25,
                                    borderRadius: 100,
                                    borderWidth: 2,
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="border-y-2 mb-7">
                <button className={`w-[50%] py-3 
                ${product.gender === "men" ? "bg-black text-white text-opacity-100 font-semibold" : " text-black text-opacity-40 font-semibold"} `}>Men</button>
                <button className={`w-[50%] py-3
                ${product.gender === "women" ? "bg-black text-white text-opacity-100 font-semibold" : "text-black text-opacity-40 font-semibold"} `}>Women</button>
            </div>
            <div className="px-5 mb-5">
                <div className="flex justify-between items-center mb-3">
                    <p className="text-black text-sm text-opacity-60 font-bold">Select your size</p>
                    <p className="text-[13px] text-black text-opacity-50 underline font-bold">Size guide</p>
                </div>
                <div className="flex gap-1">
                    {variant.sizes?.map(size => (
                        <p
                            onClick={() => size.available ? setSelectedSize(size.title) : null}
                            className={`py-[10px] font-semibold px-[14px]
                     rounded-md border-2  w-fit cursor-pointer relative
                     ${!size.available ? "crossed" : ""}
                     ${selectedSize === size.title ? "bg-black text-opacity-90 text-white" :
                                    "text-black text-opacity-40"}`}>{size.title}</p>
                    ))}
                </div>
                <button className="bg-black mt-6 mb-2 py-7 w-full rounded-full text-white text-opacity-80 text-sm font-semibold">Add To Cart</button>
                <p className="text-black text-opacity-40 font-bold text-xs text-center">Free Shipping & Returns
                    <span className="text-black text-opacity-80">  from 50€ of purchase.</span></p>
            </div>
            <div>
                {/* desc img slider */}
            </div>
            <div className="px-5 text-[#212322]">
                <h1 className="text-xl font-medium ">NATURAL AND RECYCLED MATERIALS</h1>
                <ul className=" list-disc marker:text-gray-400 pt-6 px-8 text-[15px]">
                    {product.description.specs.map(spec => (
                        <li className="font-semibold mb-4 pl-3">
                            <p className="text-[#212322] text-opacity-60 mb-4">{spec.title}</p>
                            <p className="text-[#212322] text-opacity-35">{spec.desc}</p>
                        </li>
                    ))}
                </ul>
                <h1 className="text-xl font-medium mb-4">LOCAL MANUFACTURING</h1>
                <p className="text-[#212322] text-opacity-35 font-semibold text-[15px] mb-4">France : Linen l Portugal : soles, inserts, laces, packaging </p>
                <p className="text-[#212322] text-opacity-35 font-semibold text-[15px]">Handmade in Portugal</p>
            </div>
            <div className="mt-7 mb-20">
                {product.description.info.map(item => <InfoItem item={item} />)}
            </div>
            <div>
                {product.description.detailedSpecs.map(spec => (
                    <div>
                        <img src={spec.image} alt="" />
                        <h2>{spec.title}</h2>
                        {spec.subHeadings.map(sub => (
                            <div>
                                <h4>{sub.header}</h4>
                                <p>{sub.para}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </article> 
    )
}

export default ProductInfo

function InfoItem({ item }) {
    const [isOpen, setIsOpen] = useState(false)
    return (

        <div
        className="px-5 border-y-2 border- py-6">
            <div className="flex justify-between relative">
            <p className="text-lg">{item.title}</p>
            <UseAnimation  
            render={(events,animation) => {
                return (
                    <div{...events} className="w-[98%] h-full top-0 left-0 flex items-center justify-end absolute" >
                        <div{...animation}></div>
                    </div>
                )
            }}
            onClick={() => setIsOpen(prev => !prev)}
            reverse={isOpen}  animation={plusToX} />
            </div>
            {isOpen && item.subHeadings.map(({ title, header, para }) => (
                <div className="pt-6 font-semibold text-[15px">
                    {title && <p className="text-[#212322] text-opacity-80 mb-3">{title}:</p>}
                    {header && <p className="text-[#212322] text-opacity-80 mb-2">{header}</p>}
                    {para && <p className="text-[#212322] text-opacity-50">{para}</p>}
                </div>
            ))}
        </div>
    )
}