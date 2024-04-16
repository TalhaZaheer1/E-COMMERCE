import heroShoesMob from "../../assets/homepage/heroShoesMob.avif"
function ProductCard({product,className}) {
  const { name,thumbnail,material,price,oldPrice } = product || {};
  return (
    <div className={`w-[95%] md:w-full px-3 md:px-0 border-b-[1px] pb-4 ${className}`}>
        <img className="w-full object-cover aspect-[.86/1] x-md:aspect-square mb-5" src={thumbnail} alt="" />
        <h1 className="font-semibold text-black  text-opacity-80">{name}</h1>
        <p className="text-black text-opacity-50 ">{material}</p>
        <p className=" text-black text-opacity-60 font-semibold">${price} {oldPrice && 
        <span className="text-black text-opacity-30 font-medium line-through">${oldPrice}</span>}</p>
    </div>
  )
}

export default ProductCard