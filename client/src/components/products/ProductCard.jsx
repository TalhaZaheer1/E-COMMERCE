import heroShoesMob from "../../assets/homepage/heroShoesMob.avif"
function ProductCard({product}) {
  const { name,thumbnail,material,price,oldPrice } = product || {};
  return (
    <div>
        <img src={thumbnail} alt="" />
        <h1>{name}</h1>
        <p>{material}</p>
        <p>${price} {oldPrice && <span>${oldPrice}</span>}</p>
    </div>
  )
}

export default ProductCard