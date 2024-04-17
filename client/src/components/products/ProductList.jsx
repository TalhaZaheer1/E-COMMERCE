import { useSelector } from "react-redux"
import ProductCard from "./ProductCard";

function ProductList() {
    const products = useSelector(state => state.products)

    return (
    <div>
        {products.map(headProduct => <VariantList id={headProduct._id} heroImage={headProduct.heroImage} variants={headProduct.variants} />)}
    </div>
  )
}
 
export default ProductList

function VariantList({variants,heroImage,id}){
    return(
        <div className="grid mx-auto grid-rows-[auto] justify-items-center md:max-w-[690px] x-md:max-w-[90%]
         md:grid-cols-2 x-md:grid-cols-3 2xl:grid-cols-4 gap-6 mb-6">
            <img className="w-[100vw] object-cover aspect-[16/11] x-md:aspect-[16/10.25] md:col-start-1 md:col-end-3" src={heroImage} alt="" />
            {variants.map((product,index) => (
                <ProductCard id={id} product={product} /> 

            ))}           
        </div>
 
    )
}