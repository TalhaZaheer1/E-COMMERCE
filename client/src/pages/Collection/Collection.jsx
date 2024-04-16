import { useParams } from "react-router-dom"
import ProductList from "../../components/products/ProductList"
import {Link } from "react-router-dom"

function Collection() {
    const { colName } = useParams()
  return (
    <section className="relative bg-amber-200 bg-opacity-10 pt-[10rem]">
      <div className="mb-10">
        <div className="flex text-[.8rem] mb- font-semibold justify-center gap-2 items-center">
          <Link
        className="text-center flex  text-black transition-colors text-opacity-30 hover:text-opacity-100 font-bold"
        >HOME
        </Link>
        <p className="pb-1">-</p>
        <Link className="tracking-wide">
          COLLECTION { colName === "men" ? "MEN" : "WOMEN"}
        </Link>
        </div>
        <h2 className="text-center text-[2rem] font-semibold">SNEAKERS</h2>
        </div>
        <ProductList />
    </section>
  )
}

export default Collection