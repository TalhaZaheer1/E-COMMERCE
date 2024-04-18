import { useState } from "react"
import { useGetCart } from "../../hooks/useGetCart";
import heroShoesMob from "../../assets/homepage/heroShoesMob.avif"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Cart({ cartOpen, setCartOpen }) {
    // TODO:Change this hook
    const cart = useGetCart();
    return (
        <section className={`bg-white flex transition-transform duration-500 flex-col justify-start h-screen w-[100vw] md:max-w-[750px] absolute top-0 right-0 pt-[6rem] z-[-2] text-black
        ${cartOpen ? "translate-x-0" : "translate-x-[100%]"}
        `}>
            <h1 className="text-center text-[2.7rem] font-semibold">CART</h1>
            {cart?.items?.map(item => <Item item={item} key={item.id} />)}
            <div className="mt-auto border-t-2">
                <div className="flex justify-between px-4 py-4 text-xl">
                    <p className="font-semibold">TOTAL</p>
                    <p className="text-2xl">$165.00 <span className="text-sm">TTC</span></p>
                </div>
                <button
                    onClick={() => setCartOpen(false)}
                    className="block w-[95%] mb-3 text-[.9rem] border-[1px] border-black py-3 mx-auto text-slate-500">Continue Shopping</button>
                <button className="w-full py-5 bg-black font-semibold text-white">Order</button>
            </div>
        </section>
    )
}

function Item({ item }) {
    const [del, setDel] = useState(false);
    return (
        <div className={` overflow-hidden flex flex-col md:flex-row transition-all delay-500 duration-500 
        ${del ? "max-h-0 translate-x-[100%]" : "max-h-[272px] md:max-h-[160px] translate-x-0"}`} >{/*a product*/}
            <div className="flex border-y-2">
                <img className="w-[180px] h-[220px] md:h-[`160px] object-cover" src={heroShoesMob} alt="" />
                <div className="py-3 pl-6 md:flex items-center gap-9">
                    <div>
                        <p className=" text-[1.6rem]">AXOLO LINEN</p>
                        <div>
                            <img src="" alt="" />
                            <div className="text-xs text-slate-700 mb-4">
                                <p>Beige</p>
                                <p>Size: 37</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="text-[1.7rem]">-</button>
                        <div className="border-2 h-[2.3rem] w-[2.4rem] mx-5 flex justify-center items-center">
                            <p>1</p>
                        </div>
                        <button className="text-[1.7rem]">+</button>
                    </div>
                    <p className="text-[2rem]">$165</p>
                </div>
            </div>
            <div className="relative flex md:border-y-2 pl-[2.5rem]">
                <button
                    onClick={() => setDel(true)}
                    className="text-center pr-[2rem] w-full py-3 text-black text-opacity-40 font-semibold">
                    DELETE
                </button>
                <FontAwesomeIcon
                    className={`absolute border-y-2 transition-all duration-500 right-0 text-white bg-black py-3 px-9 text-lg
                    md:py-[4.4rem] md:px-[3rem] 
            ${del ? "translate-x-0" : " translate-x-[6rem] md:translate-x-[12rem]"} 
            `}
                    icon={faX}
                />
            </div>
        </div>
    )
} 