import { useSelector } from "react-redux"
import ProductCard from "./ProductCard";

function ProductList() {
    const products = useSelector(state => state.products)

    return (
    <div>
        {products.map(headProduct => <ProductSubList variants={headProduct.variants} />)}
    </div>
  )
}

export default ProductList

function ProductSubList({variants}){
    return(
        <div>
            {variants.map((product,index) => (
                index === 1 ? 
                <div>
                    <img src={product.thumbnail} alt="" />
                    <ProductCard />
                </div> :
                <ProductCard product={product} /> 

            ))}           
        </div>

    )
}