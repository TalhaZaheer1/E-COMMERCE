import heroShoes from "../../assets/homepage/heroShoes.avif";
import heroShoesMob from "../../assets/homepage/heroShoesMob.avif";
import blueShoesMob from "../../assets/homepage/blueShoes.jpg";
import blackShoesMob from "../../assets/homepage/blackShoesMob.jpg";
import brownShoesMob from "../../assets/homepage/brownShoesMob.jpg";
import { Link } from "react-router-dom";
import "./home.css"
import { useEffect, useState } from "react";
import HomeLink from "../../components/HomeLink";
import { useSelector } from "react-redux";



export default function Home() {
  const [left,setLeft] = useState(true);
  // change this state variable to a bool for fixed width for lesser re renders
  const [ vw,setVw ] = useState(window.innerWidth)
  const msg = useSelector(state => state.error);
  console.log(msg)
  useEffect(() => {
    window.onresize = () => {
      setVw(window.innerWidth)
    }
  },[])
  return (
    <>
      <section className="h-[200vh]">
        <article className="bg-black bg-opacity-20 absolute top-0 left-0 h-[97vh] w-full">
          <img
            className="h-[97vh] w-[100vw] object-cover absolute top-0 z-[-1]"
            src={vw <= 768 ? heroShoesMob : heroShoes}
            alt=""
          />
        </article>
        <article className="flex flex-col justify-end items-center text-white h-screen relative z-10">
            <div className="text-center font-semibold my-auto ">
                <h1 className="text-[1.5rem]">NEW</h1>
                <h1 className="text-[2rem]">AXOLO LINEN</h1>
            </div>
            <div className="flex justify-around w-full mb-16 text-[2rem] ">
                <HomeLink left={left} setLeft={setLeft} text="WOMAN" />
                <HomeLink left={left} setLeft={setLeft} text="MAN" />
            </div>
        </article>
        <article className="flex flex-col justify-end items-center text-white h-screen relative z-10">
          <img className="h-screen object-cover absolute top-0 z-0" src={blueShoesMob} alt="" />
            <div className="text-center text-black font-semibold my-auto z-10">
                <h1 className="text-[1.5rem]">Recycled cotton - robust weave</h1>
                <h1 className="text-[2rem]">KOTO</h1>
            </div>
            <div className="flex justify-around w-full mb-16 text-[2rem] ">
                <HomeLink left={left} setLeft={setLeft} text="WOMAN" />
                <HomeLink left={left} setLeft={setLeft} text="MAN" />
            </div>
        </article>
        <article className="flex flex-col justify-end items-center text-white h-screen relative z-10">
          <img className="h-screen object-cover absolute top-0 z-0" src={brownShoesMob} alt="" />
            <div className="text-center font-semibold my-auto z-10">
                <h1 className="text-[1.5rem]">Recycled wool - ultra comfortable</h1>
                <h1 className="text-[2rem]">VOLA</h1>
            </div>
            <div className="flex justify-around w-full mb-16 text-[2rem] ">
                <HomeLink left={left} setLeft={setLeft} text="WOMAN" />
                <HomeLink left={left} setLeft={setLeft} text="MAN" />
            </div>
        </article>
        <article className="flex flex-col justify-end items-center text-white h-screen relative z-10">
          <img className="h-screen object-cover absolute top-0 z-0" src={blackShoesMob} alt="" />
            <div className="text-center font-semibold my-auto z-10">
                <h1 className="text-[1.5rem]">Recycled rubber - waterproof</h1>
                <h1 className="text-[2rem]">AXOLO R-SKIN®</h1>
            </div>
            <div className="flex justify-around w-full mb-16 text-[2rem] ">
                <HomeLink left={left} setLeft={setLeft} text="WOMAN" />
                <HomeLink left={left} setLeft={setLeft} text="MAN" />
            </div>
        </article>
      </section>
    </>
  );
}
