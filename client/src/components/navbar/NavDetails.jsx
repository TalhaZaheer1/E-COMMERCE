import { Link } from "react-router-dom"
import heroShoesMob from "../../assets/homepage/heroShoesMob.avif"

export default function NavDetails({ setHover,hover,products }){
    return (
        <div onMouseLeave={() => setHover(null)}  className="bg-white h-[35rem] pt-16">
            
            { hover === "woman" ?
             <div className="flex gap-14">
                <img className="h-[400px] w-[290px] object-cover" src={heroShoesMob} alt="" />
                <div className="pr-10">
                    <h1 className="font-bold text-xl mb-8">Sneakers</h1>
                    <div className="flex flex-col gap-1">
                    {/* {products.map(product => (
                    <Link key={product.id} className="font-semibold text-slate-500 transition-colors duration-300 text-lg underLineLeft relative">
                        {product.name} - <span className="font-light text-[1rem]">{product.material}</span>
                    </Link>
                    ))} */}

                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-xl mb-8">Accessories</h1>
                    <div className="flex flex-col gap-1">
                    <Link className="font-semibold text-slate-500 transition-colors duration-300 text-[1rem] underLineLeft relative">Embroided Beanie</Link>
                    </div>
                </div>
            </div> :
              hover === "man" ?
              <div className="flex gap-14">
              <img className="h-[400px] w-[290px] object-cover" src={heroShoesMob} alt="" />
              <div className="pr-10">
                  <h1 className="font-bold text-xl mb-8">Sneakers</h1>
                  <div className="flex flex-col gap-1">
                  <Link className="font-semibold text-slate-500 transition-colors duration-300 text-lg underLineLeft relative">VOLA - <span className="font-light text-[1rem]">Recycled wool</span></Link>
                  {/* {products.map(product => (
                    <Link key={product.id} className="font-semibold text-slate-500 transition-colors duration-300 text-lg underLineLeft relative">
                        {product.name} - <span className="font-light text-[1rem]">{product.material}</span>
                    </Link>
                    ))} */}
                  </div>
              </div>
              <div>
                  <h1 className="font-bold text-xl mb-8">Accessories</h1>
                  <div className="flex flex-col gap-1">
                  <Link className="font-semibold text-slate-500 transition-colors duration-300 text-[1rem] underLineLeft relative">Embroided Beanie</Link>
                  </div>
              </div>
          </div> :
               hover === "newArrival" ?
               <div className="flex gap-14">
               <img className="h-[400px] w-[290px] object-cover" src={heroShoesMob} alt="" />
               <div className="pr-10">
                   <h1 className="font-bold text-xl mb-8">MAN</h1>
                   <div className="flex flex-col gap-1">
                   <Link className="font-semibold text-slate-500 transition-colors duration-300 text-lg underLineLeft relative">VOLA - <span className="font-light text-[1rem]">Recycled wool</span></Link>
 
                   </div>
               </div>
               <div>
                   <h1 className="font-bold text-xl mb-8">WOMAN</h1>
                   <div className="flex flex-col gap-1">
                   <Link className="font-semibold text-slate-500 transition-colors duration-300 text-[1rem] underLineLeft relative">Embroided Beanie</Link>
                   </div>
               </div>
           </div> :
                null
            }
        </div>
    )
}

