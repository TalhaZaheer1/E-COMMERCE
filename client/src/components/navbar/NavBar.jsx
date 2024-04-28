import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUser,
  faChevronRight,
  faChevronLeft,
  faX
} from "@fortawesome/free-solid-svg-icons";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavDetails from "./NavDetails";
import "./navBar.css";
import { useSelector,useDispatch } from "react-redux";
import { setCartOpen } from "../../store/user/actions"
import { useLocation } from "react-router-dom";
import Cart from "./Cart";
import Collection from "../../pages/Collection/Collection";

export default function NavBar() {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(null);
  const [isClosed, setIsClosed] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [anime, setAnime] = useState(false);
  const [slider, setSlider] = useState(null);
  const [secondSlider, setSecondSlider] = useState(null);
  const cartOpen = useSelector(state => state.cartOpen);
  const products = useSelector(state => state.products);
  const {pathname} = useLocation()

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const y = window.scrollY; 
      if (y >= 50) setScrolled(true);
      else setScrolled(false);
    });
  }, []);
  useEffect(() => {
    if (!isClosed)
      setTimeout(() => {
        setAnime(true);
      }, 200);
    else
      setTimeout(() => {
        setAnime(false);
      }, 200);
  }, [isClosed]);
  
  return (
    <>
      <nav
        className={`${
          hover ? "bg-white text-black" : "bg-transparent  text-white"
        } fixed top-0 w-full pt-2 pl-5 pr-2 z-30 lg:pt-10 lg:px-12`}
      >
        <div
          className={`h-fit mobileNav ${
            !isClosed ? "mobileNav-open text-black" : ""
          } ${scrolled || cartOpen ? "mobileNav-scroll-open text-black" : ""}
          ${pathname.includes("collection") || pathname.includes("product") && "text-black"}
          overflow-hidden`}
        >
          <div className="flex justify-between items-center">
            <h1 className=" font-[900] tracking-[.3em] text-[1.7rem]  transition-all duration-300 lg:text-[1.7rem] lg:tracking-[.3em]">
              UBAC
            </h1>
            <div className="flex gap-14 text-xs font-bold content-center">
              <div className="hidden lg:flex gap-10 font-semibold">
                <Link className="text-[.75rem]" onMouseEnter={() => setHover("woman")}>
                  <p className="underLine">WOMAN</p>
                </Link>
                <Link  className="text-[.75rem]" onMouseEnter={() => setHover("man")}>
                  <p className="underLine">MAN</p>
                </Link>
                <Link className="text-[.75rem]" onMouseEnter={() => setHover("newArrival")}>
                  <p className="underLine">NEW ARRIVAL</p>
                </Link>
                <Link to="/account/signup">
                <FontAwesomeIcon className="p-0 text-[1.1rem]" icon={faUser} />
                </Link>
                <button>
                <FontAwesomeIcon onClick={() => dispatch(setCartOpen(true))} icon={faShoppingBag} className="text-[1.1rem]" />
                </button>
              </div>
              <div className="flex justify-center gap-1 lg:hidden">
                <Link
                  to="/account/signup"
                  className={`${
                    !isClosed ? " bg-slate-100" : null
                  } rounded-full border-black bg-transparent transition-all duration-300  py-3 px-6
                  `}
                >
                  <FontAwesomeIcon className="p-0 text-[1.3rem]" icon={faUser} />
                </Link>
                <button
                  className={`${
                    !isClosed ? "rounded-full bg-slate-100" : null
                  } bg-transparent transition-all duration-300 py-3 px-6 relative`}
                >
                  <FontAwesomeIcon onClick={() => dispatch(setCartOpen(true))} className={`transition-opacity text-[1.3rem] translate-x-1 duration-600 ease-linear ${cartOpen ? "opacity-0" : "opacity-1"}`} icon={faShoppingBag} size="2x" />
                  <FontAwesomeIcon icon={faX}
                  onClick={() => dispatch(setCartOpen(false))} 
                  className={`text-[1.4rem] text-white bg-black py-[19px] px-[21px] rounded-full absolute transition-all duration-300 opacity-0 scale-0 top-[.2rem] left-[.5rem]
                  ${cartOpen ? "scale-100 opacity-100" : ""}
                  `} />
                </button>
                <button
                  className={`cursor-pointer ${
                    !isClosed ? "rounded-full bg-slate-100" : null
                  } p-3`}
                  onClick={() => setIsClosed(!isClosed)}
                >
                  <Hamburger
                    toggled={!isClosed}
                    toggle={setIsClosed}
                    duration={0.8}
                    size={23}
                  />
                </button>
              </div>
            </div> 
            <button className="hidden lg:inline-block">EN</button>
          </div>
          <div className="relative lg:hidden">
            <div
              className={`flex-col text-[1.3rem] font-semibold px-7 closedMenu pt-14  ${
                isClosed ? "" : `openedMenu`
              } ${anime ? "openedMenu1" : "closedMenu1"} `}
            >
              <div
                onClick={() => setSlider("woman")}
                className="flex justify-between mb-12 cursor-pointer"
              >
                <p>WOMEN</p>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
              <div
                onClick={() => setSlider("man")}
                className="flex justify-between mb-12 cursor-pointer"
              >
                <p>MAN</p>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
              <div
                onClick={() => setSlider("newArrival")}
                className="flex justify-between mb-8 cursor-pointer"
              >
                <p>NEW ARRIVAL</p>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
            <div
              className={`text-[1.25rem] px-5 pt-12 font-semibold transition-transform duration-300 ease-in-out bg-white h-screen w-full ${
                slider === "woman" ? "translate-x-0" : "translate-x-[100%]"
              }  absolute top-0 lg:hidden`}
            >
              <div className="flex justify-center items-center mb-14">
                <FontAwesomeIcon
                  onClick={() => setSlider(null)}
                  className="mr-auto fa-xs cursor-pointer"
                  icon={faChevronLeft}
                />
                <p className="mr-auto font-semibold pr-6">WOMEN</p>
              </div>
              <div
                onClick={() => setSecondSlider("sneakersWomen")}
                className="flex justify-between items-center mb-8 cursor-pointer"
              >
                <p>Sneakers</p>
                <FontAwesomeIcon className="fa-xs" icon={faChevronRight} />
              </div>
              <div
                onClick={() => setSecondSlider("acessWomen")}
                className="flex justify-between items-center cursor-pointer"
              >
                <p>Acessories</p>
                <FontAwesomeIcon icon={faChevronRight} className="fa-xs" />
              </div>
            </div>
            <div
              className={`text-[1.25rem] font-semibold px-5 pt-12 transition-transform duration-300 ease-in-out bg-white h-screen w-full ${
                slider === "man" ? "translate-x-0" : "translate-x-[100%]"
              }  absolute top-0 lg:hidden`}
            >
              <div className="flex justify-center items-center mb-14">
                <FontAwesomeIcon
                  onClick={() => setSlider(null)}
                  className="mr-auto fa-xs cursor-pointer"
                  icon={faChevronLeft}
                />
                <p className="mr-auto pr-6">MEN</p>
              </div>
              <div
                onClick={() => setSecondSlider("sneakersMen")}
                className="flex justify-between items-center mb-10 cursor-pointer"
              >
                <p>Sneakers</p>
                <FontAwesomeIcon className="fa-xs" icon={faChevronRight} />
              </div>
              <div
                onClick={() => setSecondSlider("acessMen")}
                className="flex justify-between items-center cursor-pointer"
              >
                <p>Accessories</p>
                <FontAwesomeIcon icon={faChevronRight} className="fa-xs" />
              </div>
            </div>
            <div
              className={`text-[1.5rem] font-semibold px-5 pt-14 transition-transform duration-300 ease-in-out bg-white h-screen w-full ${
                slider === "newArrival" ? "translate-x-0" : "translate-x-[100%]"
              }  absolute top-0 lg:hidden`}
            >
              <div className="flex justify-center items-center mb-10">
                <FontAwesomeIcon
                  onClick={() => setSlider(null)}
                  className="mr-auto fa-xs cursor-pointer"
                  icon={faChevronLeft}
                />
                <p className="mr-auto pr-6">NEW</p>
              </div>
              <div
                onClick={() => setSecondSlider("newMen")}
                className="flex justify-between items-center mb-3 cursor-pointer"
              >
                <p>Man</p>
                <FontAwesomeIcon className="fa-xs" icon={faChevronRight} />
              </div>
              <div
                onClick={() => setSecondSlider("newWomen")}
                className="flex justify-between items-center cursor-pointer"
              >
                <p>Woman</p>
                <FontAwesomeIcon icon={faChevronRight} className="fa-xs" />
              </div>
            </div>
            <div
              className={`text-[1.5rem] font-semibold px-5 pt-14 transition-transform duration-300 ease-in-out bg-white h-screen w-full ${
                secondSlider === "sneakersWomen"
                  ? "translate-x-0"
                  : "translate-x-[100%]"
              }  absolute top-0 lg:hidden`}
            >
              <div className="flex justify-center items-center mb-10">
                <FontAwesomeIcon
                  onClick={() => setSecondSlider(null)}
                  className="mr-auto fa-xs cursor-pointer"
                  icon={faChevronLeft}
                />
                <p className="mr-auto pr-6 text-[2rem]">Sneakers</p>
              </div>
              <div className="flex flex-col items-center mb-3 cursor-pointer">
                <p>ALL PRODUCTS</p>
                <p className="text-sm font-light">SNEAKERS - WOMEN</p>
              </div>
              <div className="flex flex-col font-normal text-slate-400 text-[1.5rem] cursor-pointer gap-4">
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
              </div>
            </div>
            <div
              className={`text-[1.5rem] font-semibold px-5 pt-14 transition-transform duration-300 ease-in-out bg-white h-screen w-full ${
                secondSlider === "acessWomen"
                  ? "translate-x-0"
                  : "translate-x-[100%]"
              }  absolute top-0 lg:hidden`}
            >
              <div className="flex justify-center items-center mb-10">
                <FontAwesomeIcon
                  onClick={() => setSecondSlider(null)}
                  className="mr-auto fa-xs cursor-pointer"
                  icon={faChevronLeft}
                />
                <p className="mr-auto pr-6 text-[2rem]">ACCESSORIES</p>
              </div>
              <div className="flex flex-col items-center mb-3 cursor-pointer">
                <p>ALL PRODUCTS</p>
                <p className="text-sm font-light">SEE ALL OUR ACCESSORIES</p>
              </div>
              <div className="flex flex-col font-normal text-slate-400 text-[1.5rem] cursor-pointer gap-4">
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
              </div>
            </div>
            <div
              className={`text-[1.5rem] font-semibold px-5 pt-14 transition-transform duration-300 ease-in-out bg-white h-screen w-full ${
                secondSlider === "sneakersMen"
                  ? "translate-x-0"
                  : "translate-x-[100%]"
              }  absolute top-0 lg:hidden`}
            >
              <div className="flex justify-center items-center mb-10">
                <FontAwesomeIcon
                  onClick={() => setSecondSlider(null)}
                  className="mr-auto fa-xs cursor-pointer"
                  icon={faChevronLeft}
                />
                <p className="mr-auto pr-6 text-[2rem]">Sneakers</p>
              </div>
              <div className="flex flex-col items-center mb-3 cursor-pointer">
                <p>ALL PRODUCTS</p>
                <p className="text-sm font-light">SNEAKERS - MEN</p>
              </div>
              <div className="flex flex-col font-normal text-slate-400 text-[1.5rem] cursor-pointer gap-4">
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
              </div>
            </div>
            <div
              className={`text-[1.5rem] font-semibold px-5 pt-14 transition-transform duration-300 ease-in-out bg-white h-screen w-full ${
                secondSlider === "acessMen"
                  ? "translate-x-0"
                  : "translate-x-[100%]"
              }  absolute top-0 lg:hidden`}
            >
              <div className="flex justify-center items-center mb-10">
                <FontAwesomeIcon
                  onClick={() => setSecondSlider(null)}
                  className="mr-auto fa-xs cursor-pointer"
                  icon={faChevronLeft}
                />
                <p className="mr-auto pr-6 text-[2rem]">ACCESSORIES</p>
              </div>
              <div className="flex flex-col items-center mb-3 cursor-pointer">
                <p>ALL PRODUCTS</p>
                <p className="text-sm font-light">SEE ALL OUR ACCESSORIES</p>
              </div>
              <div className="flex flex-col font-normal text-slate-400 text-[1.5rem] cursor-pointer gap-4">
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
              </div>
            </div>
            <div
              className={`text-[1.5rem] font-semibold px-5 pt-14 transition-transform duration-300 ease-in-out bg-white h-screen w-full ${
                secondSlider === "newWomen"
                  ? "translate-x-0"
                  : "translate-x-[100%]"
              }  absolute top-0 lg:hidden`}
            >
              <div className="flex justify-center items-center mb-10">
                <FontAwesomeIcon
                  onClick={() => setSecondSlider(null)}
                  className="mr-auto fa-xs cursor-pointer"
                  icon={faChevronLeft}
                />
                <p className="mr-auto pr-6 text-[2rem]">WOMEN</p>
              </div>
              <div className="flex flex-col items-center mb-3 cursor-pointer">
                <p>ALL PRODUCTS</p>
                <p className="text-sm font-light">NEW ARRIVALS - WOMEN</p>
              </div>
              <div className="flex flex-col font-normal text-slate-400 text-[1.5rem] cursor-pointer gap-4">
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
              </div>
            </div>
            <div
              className={`text-[1.5rem] font-semibold px-5 pt-14 transition-transform duration-300 ease-in-out bg-white h-screen w-full ${
                secondSlider === "newMen"
                  ? "translate-x-0"
                  : "translate-x-[100%]"
              }  absolute top-0 lg:hidden`}
            >
              <div className="flex justify-center items-center mb-10">
                <FontAwesomeIcon
                  onClick={() => setSecondSlider(null)}
                  className="mr-auto fa-xs cursor-pointer"
                  icon={faChevronLeft}
                />
                <p className="mr-auto pr-6 text-[2rem]">MEN</p>
              </div>
              <div className="flex flex-col items-center mb-3 cursor-pointer">
                <p>ALL PRODUCTS</p>
                <p className="text-sm font-light">NEW ARRIVALS - MEN</p>
              </div>
              <div className="flex flex-col font-normal text-slate-400 text-[1.5rem] cursor-pointer gap-4">
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
                <p>VOLA -recycled wool</p>
              </div>
            </div>
          </div>
        </div>
        {hover ? <NavDetails hover={hover} setHover={setHover} products={products} /> : null}
        <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      </nav>
    </>
  );
}
