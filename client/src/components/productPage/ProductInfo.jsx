/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCartOpen } from "../../store/user/actions";
import { Rating,Star } from '@smastrom/react-rating'

import Circle from "@uiw/react-color-circle";
import { colorNameToHex, hexToColorName } from "../../utils/colorChanger";
import UseAnimation from "react-useanimations/index";
import plusToX from "react-useanimations/lib/plusToX";
import { NormalCaraousel, TitleCaraousel, DropDownCaraousel } from "./Caraousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faSearch } from "@fortawesome/free-solid-svg-icons/index";

import "./product.css";
import '@smastrom/react-rating/style.css'
import "react-lazy-load-image-component/src/effects/blur.css";
//temp images
import blackShoesMob from "../../assets/homepage/blackShoesMob.jpg";
import blackShoesMobSmall from "../../assets/homepage/blackShoesMob-small.jpg";
import brownShoesMob from "../../assets/homepage/brownShoesMob.jpg";
import brownShoesMobSmall from "../../assets/homepage/brownShoesMob-small.jpg";
import heroShoesMob from "../../assets/homepage/heroShoesMob.avif";
import heroShoesMobSmall from "../../assets/homepage/heroShoesMob-small.avif";
import freshLinen from "../../assets/ProductPage/fresh_lin.avif";
import freshLinenSmall from "../../assets/ProductPage/fresh_lin-small.avif";
import robustCanvas from "../../assets/ProductPage/robust_canvas.avif";
import robustCanvasSmall from "../../assets/ProductPage/robust_canvas-small.avif";
import nonSlip from "../../assets/ProductPage/non_slip.avif";
import nonSlipSmall from "../../assets/ProductPage/non_slip-small.avif";
import sideStiching from "../../assets/ProductPage/side_stitching.avif";
import sideStichingSmall from "../../assets/ProductPage/side_stitching-small.avif";

const product = {
  tag:"Axolo - Lin - Men",
  title: "AXOLO LINEN SNEAKERS",
  gender: "men",
  available: true,
  colors: {
    classic: ["blue", "beige", "pink", "white", "lightgrey"],
    limited: ["yellow"],
  },
  variants: [
    {
      name: "AXOLO-LINEN BAIGE",
      price: "134.00",
      color: {
        title: "blue",
        type: "classic",
      },
      images: [
        {
          actual: brownShoesMob,
          lazy: brownShoesMobSmall,
        },
        {
          actual: blackShoesMob,
          lazy: blackShoesMobSmall,
        },
        {
          actual: heroShoesMob,
          lazy: heroShoesMobSmall,
        },
        {
          actual: heroShoesMob,
          lazy: heroShoesMobSmall,
        },
        {
          actual: heroShoesMob,
          lazy: heroShoesMobSmall,
        },
        {
          actual: heroShoesMob,
          lazy: heroShoesMobSmall,
        },
        {
          actual: heroShoesMob,
          lazy: heroShoesMobSmall,
        },
      ],
      sizes: [
        {
          title: 41,
          available: true,
        },
        {
          title: 42,
          available: false,
        },
        {
          title: 43,
          available: true,
        },
        {
          title: 44,
          available: true,
        },
        {
          title: 45,
          available: false,
        },
        {
          title: 46,
          available: true,
        },
      ],
    },
  ],
  description: {
    imageSet: [
      {
        title: "Fresh Linen",
        actual: freshLinen,
        lazy: freshLinenSmall,
      },
      {
        title: "Robust Canvas",
        actual: robustCanvas,
        lazy: robustCanvasSmall,
      },
      {
        title: "Non-Slip",
        actual: nonSlip,
        lazy: nonSlipSmall,
      },
      {
        title: "Side Stiching",
        actual: sideStiching,
        lazy: sideStichingSmall,
      },
    ],
    specs: [
      {
        title: "French linen",
        desc: "Breathable,comfortable,soft",
      },
      {
        title: "Designed to last a long time",
        desc: "Strong canvas weave",
      },
      {
        title: "Waterproofed",
        desc: "To accompany you everywhere even on a rainy day",
      },
      {
        title: "Outsole - Natural and recycled rubber",
        desc: "Soft, non-slip and comfortable",
      },
      {
        title: "Drytech™",
        desc: "Removable & ergonomic insole",
      },
    ],
    info: [
      {
        title: "Shipping & Return",
        subHeadings: [
          {
            title: "Return",
            header: "The return is offered in Pakistan",
            para: "Preparation: your order will be prepared within 1 to 3 working days.Delivery: once prepared, your order will be sent within 24 to 72 working hours to your home or to a relay point according to your preference.",
          },
          {
            title: "",
            header: "We recommend washing by hand",
            para: "",
          },
        ],
      },
    ],
    detailedSpecs: [
      {
        image: {
          actual: brownShoesMob,
          lazy: brownShoesMobSmall,
        },
        title: "R-CO",
        subHeadings: [
          {
            header: "The benefits of recycled cotton",
            para: "R-CO has the same advantages as conventional cotton: breathability, comfort and softness.Thanks to its canvas weave, the fabric is robust and durable.",
          },
        ],
      },
      {
        image: {
          actual: blackShoesMob,
          lazy: blackShoesMobSmall,
        },
        title: "IMPACT",
        subHeadings: [
          {
            header: "Cotton recycled in Spain",
            para: "Recycled cotton avoids the impact of growing new cotton, while at the same time recycling our old clothes, which are in large quantities in Europe and destined for the bin. R-CO limits the use of water (no dyeing or washing) and does not use pesticides.",
          },
          {
            header: "VS conventional cotton",
            para: "For one kilo of conventional cotton, between 2,700 and 17,000 liters of water are used. Its culture represents 25% of the pesticides used in the world in addition to the massive use of polluting and toxic dyes. It comes from India, Turkey or the United States.",
          },
        ],
      },
      {
        image: {
          actual: blackShoesMob,
          lazy: heroShoesMobSmall,
        },
        title: "SOLE",
        subHeadings: [
          {
            header: "Hand-sewn",
            para: "Assembled by a side stitching and a strobel assembly. These techniques allow for a resistant and flexible sneaker.",
          },
          {
            header: "Natural and recycled rubber",
            para: "Made from production scraps and old soles crushed and then recycled. Rubber is one of the most versatile materials for a sole: good resistance to abrasion, waterproof and very comfortable.",
          },
        ],
      },
    ],
  },
  reviews: {
    rating: 4.5,
    all: [],
  },
};

function ProductInfo(/*{product}*/) {
  const dispatch = useDispatch();
  const { paramColor } = useParams();
  const [ caraouselDrop,setCaraouselDrop ] = useState(false);
  const [ selectedSlide,setSelectedSlide ] = useState(null)
  const cartOpen = useSelector((state) => state.cartOpen);
  const [selectedColor, setSelectedColor] = useState(
    paramColor || product.colors.classic[0]
  );
  const variant = product.variants.find(
    (variant) =>
      variant.color.title.toLowerCase() === selectedColor.toLocaleLowerCase()
  ) || { sizes: [] };
  const [selectedSize, setSelectedSize] = useState(
    variant.sizes[0]?.title || 41
  );

  return (
    <article className="md:pt-[8rem] h-[100%] relative">
      <DropDownCaraousel images={variant.images} selectedSlide={selectedSlide} caraouselDrop={caraouselDrop} setCaraouselDrop={setCaraouselDrop} />
      
      <div className="x-md:hidden">
        <NormalCaraousel images={variant.images} />
      </div>
      <div className="x-md:flex mb-[5rem]">
        {/*Images container that replace caraousel*/}
        <div className="hidden x-md:grid auto-rows-auto h-fit grid-cols-2 gap-x-2 gap-y-1">
          {variant.images.map((img, index) => (
            <div 
            className={` ${index === 0 && "col-[1/3]"} relative cursor-pointer`}
            onClick={() => {
              setCaraouselDrop(true)
              setSelectedSlide(index)}}
            >
              <ImageHoverIcon />
              <LazyLoadImage
              wrapperClassName="w-full"
                className={`${
                  index === 0 ? "aspect-[1/.6]" : "aspect-square"
                } w-full object-cover`}
                src={img.actual}
                placeholderSrc={img.lazy}
                effect="blur"
              />
            </div>
          ))}
        </div>
        {/*Product details selection div*/}
        <div className="x-md:w-[40%] x-md:px-10">
          <div className="px-5 pt-5 md:px-8 text-[#212322]">
            <h1 className="text-[1.4rem] md:text-3xl font-bold">
              {product.title}
            </h1>
            <h2 className="text-[#898989] text-opacity-70 font-semibold">
              {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
            </h2>
            <div className="flex gap-3">
              <Rating
                className="max-w-20"
                readOnly={true}
                value={product.reviews.rating}
                itemStyles={{
                  itemShapes:Star,
                  activeFillColor:"#000000",
                  itemStrokeWidth:2,
                  activeStrokeColor:"#000000",
                }
                }
              />
              <p className="font-semibold text-black text-opacity-60">
                {product.reviews.all.length + " "} Reviews
              </p>
            </div>
            <h2 className="font-semibold text-[1.3rem] mt-2 mb-4">
              ${variant.price}
            </h2>
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <h3 className="font-semibold text-sm text-black text-opacity-60 mb-3">
                  Classic
                </h3>
                <Circle
                  colors={product.colors.classic.map((color) =>
                    colorNameToHex(color)
                  )}
                  color={colorNameToHex(selectedColor)}
                  onChange={(color) => {
                    console.log(color);
                    setSelectedColor(hexToColorName(color.hex));
                  }}
                  pointProps={{
                    style: {
                      marginRight: 10,
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      borderWidth: 2,
                    },
                  }}
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-black text-opacity-60 mb-3">
                  Limited
                </h3>
                <Circle
                  colors={product.colors.limited.map((color) =>
                    colorNameToHex(color)
                  )}
                  color={colorNameToHex(selectedColor)}
                  onChange={(color) => {
                    console.log(color);
                    setSelectedColor(hexToColorName(color.hex));
                  }}
                  pointProps={{
                    style: {
                      marginRight: 10,
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      borderWidth: 2,
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border-y-2 mb-7 md:px-5">
            <button
              className={`w-[50%] py-3 
                ${
                  product.gender === "men"
                    ? "bg-black text-white text-opacity-100 font-semibold"
                    : " text-black text-opacity-40 font-semibold"
                } `}
            >
              Men
            </button>
            <button
              className={`w-[50%] py-3
                ${
                  product.gender === "women"
                    ? "bg-black text-white text-opacity-100 font-semibold"
                    : "text-black text-opacity-40 font-semibold"
                } `}
            >
              Women
            </button>
          </div>
          <div className="px-5 mb-5">
            <div className="flex justify-between items-center mb-3">
              <p className="text-black text-sm text-opacity-60 font-bold">
                Select your size
              </p>
              <p className="text-[13px] text-black text-opacity-50 underline font-bold">
                Size guide
              </p>
            </div>
            <div className="flex gap-1">
              {variant.sizes?.map((size) => (
                <p
                  onClick={() =>
                    size.available ? setSelectedSize(size.title) : null
                  }
                  className={`py-[10px] font-semibold px-[14px]
                     rounded-md border-[1px]  w-[50px] cursor-pointer relative transition-all duration-300
                     ${!size.available ? "crossed opacity-90" : " hover:border-black"}
                     ${
                       selectedSize === size.title
                         ? "bg-black text-opacity-90 text-white"
                         : "text-black text-opacity-40"
                     }`}
                >
                  {size.title}
                </p>
              ))}
            </div>
            <div className="flex justify-center">
              <button 
              onClick={() => dispatch(setCartOpen(true))}
              className="bg-black mt-6 mb-2 py-7 w-full max-w-[400px]  rounded-full text-white text-opacity-80 text-sm font-semibold">
                Add To Cart
              </button>
            </div>
            <p className="text-black text-opacity-40 font-bold text-xs text-center">
              Free Shipping & Returns
              <span className="text-black text-opacity-80">
                {" "}
                from 50€ of purchase.
              </span>
            </p>
          </div>
          {/* desc img slider */}
          <TitleCaraousel images={product.description.imageSet} />
          <div className="mt-8 px-5 md:px-10 text-[#212322]">
            <h1 className="text-xl font-medium ">
              NATURAL AND RECYCLED MATERIALS
            </h1>
            <ul className=" list-disc marker:text-gray-400 pt-6 px-8 text-[14px]">
              {product.description.specs.map((spec) => (
                <li className="font-semibold mb-4 pl-3">
                  <p className="text-[#212322] text-opacity-90 mb-2">
                    {spec.title}
                  </p>
                  <p className="text-[#212322] text-opacity-50">{spec.desc}</p>
                </li>
              ))}
            </ul>
            <h1 className="text-xl font-medium mb-4">LOCAL MANUFACTURING</h1>
            <p className="text-[#212322] text-opacity-50 font-semibold text-[15px] mb-4">
              France : Linen l Portugal : soles, inserts, laces, packaging{" "}
            </p>
            <p className="text-[#212322] text-opacity-50 font-semibold text-[15px]">
              Handmade in Portugal
            </p>
          </div>
          <div className="mt-7 mb-10">
            {product.description.info.map((item) => (
              <InfoItem item={item} />
            ))}
          </div>
        </div>
      </div> 
      <div className="px-4 text-[#212322] max-w-[470px] mx-auto x-md:max-w-[980px]">
        {product.description.detailedSpecs.map((spec, index) => (
          <div
            className={`flex flex-col ${
              index % 2 === 0 ? "x-md:flex-row" : " x-md:flex-row-reverse"
            } x-md:gap-[11rem] mb-9`}
          >
            <img
              className="object-cover aspect-[1/1] x-md:aspect-[.69/1] max-w-[440px]"
              src={spec.image.actual}
              alt=""
            />
            <div className="flex flex-col x-md:justify-center">
              <h2 className="font-bold text-3xl my-5 md:my-7 md:text-[3rem]">
                {spec.title}
              </h2>
              {spec.subHeadings.map((sub) => (
                <div className="mb-8">
                  <h4 className="mb-4 text-2xl font-medium">{sub.header}</h4>
                  <p className="text-black text-opacity-50 font-medium">
                    {sub.para}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function InfoItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`px-5 md:px-10 max-h-fit transition-all duration-300 grid relative border-y-2 border- py-6 z-10`}
    >
      <div className="flex justify-between relative">
        <p className="text-[17px] font-medium">{item.title}</p>
        <UseAnimation
          render={(events, animation) => {
            return (
              <div
                {...events}
                className="w-[98%] h-full max-h-[80px] top-0 left-0 flex items-center justify-end absolute"
              >
                <div {...animation}></div>
              </div>
            );
          }}
          onClick={() => setIsOpen((prev) => !prev)}
          reverse={isOpen}
          animation={plusToX}
        />
      </div>
      <div
        className={`grid transition-all duration-500 grid-rows-[0fr] ${
          isOpen ? "grid-rows-[1fr]" : ""
        }`}
      >
        <div className=" overflow-hidden ">
          {item.subHeadings.map(({ title, header, para }) => (
            <div
              className={`pt-6 font-semibold text-[15px] flex flex-col gap-3`}
            >
              {title && (
                <p className="text-[#212322] text-opacity-80 ">{title}:</p>
              )}
              {header && (
                <p className="text-[#212322] text-opacity-80">{header}</p>
              )}
              {para && <p className="text-[#212322] text-opacity-50">{para}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageHoverIcon(){
  const [ isHover,setIsHover ] = useState(false)
  return (
    <div 
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    className="absolute top-0 left-0 flex justify-center h-full w-full items-center z-10">
      <FontAwesomeIcon className={`p-7 rounded-full  bg-black text-white scale-0  ${isHover ? "hoverAnimationOpen scale-100" : "hoverAnimationClose"}`} icon={faSearch} />
    </div>
  )
}

export default ProductInfo;
