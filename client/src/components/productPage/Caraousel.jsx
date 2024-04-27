import { forwardRef, useEffect, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons/index";
import UseAnimation from "react-useanimations/index";
import maximizeMinimize from "react-useanimations/lib/maximizeMinimize/index";
import _ from 'lodash';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { Pagination, FreeMode } from "swiper/modules";

function NormalCaraousel({ images }) {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#696b6e",
        }}
        lazy={true}
        pagination={true}
        modules={[Pagination, FreeMode]}
        freeMode={true}
        className="mySwiper"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index}>
            <LazyLoadImage
              wrapperClassName="w-full"
              className="aspect-[1/1] w-full object-cover cursor-grab active:cursor-grabbing"
              src={img.actual}
              placeholderSrc={img.lazy}
              effect="blur"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

function TitleCaraousel({ images }) {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#696b6e",
        }}
        spaceBetween={0}
        lazy={true}
        pagination={true}
        modules={[Pagination, FreeMode]}
        freeMode={true}
        className="mySwiper"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <LazyLoadImage
                className="max-h-[400px] w-[100vw] object-cover cursor-grab active:cursor-grabbing"
                src={img.actual}
                placeholderSrc={img.lazy}
                effect="blur"
              />
              <div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full"></div>
              <div className="absolute flex justify-center w-full h-full items-center top-0 left-0">
                <h3 className="text-[2.3rem] text-white">{img.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

function DropDownCaraousel({
  images,
  caraouselDrop,
  setCaraouselDrop,
  selectedSlide,
}) {
  // const circleRef = useRef();
  // useEffect(() => {
  //   document.addEventListener('mousemove',moveTheCircle)
  //   return () => {
  //     document.removeEventListener('mousemove',moveTheCircle)
  //   }
  // },[])
  // const moveTheCircle = _.throttle((e) => {
  //   const mouseX = e.clientX - circleRef.current.clientWidth / 2;
  //   const mouseY = e.clientY - circleRef.current.clientHeight / 2;
  //   console.log(mouseX,mouseY)
    
  //   circleRef.current.style.top = `${mouseY}px`;
  //   circleRef.current.style.left = `${mouseX}px`;

  // },16)
  return (
    <div
      className={`fixed top-0 left-0 z-40 dropDownCaraousel origin-top w-[100vw] overflow-hidden
      ${caraouselDrop ? "max-h-[100vh]" : "max-h-[0px]"}`}
    >
      <Swiper
        style={{
          "--swiper-pagination-color": "#696b6e",
        }}
        lazy={true}
        modules={[FreeMode]}
        freeMode={true}
        className="mySwiper"
      >
        <SwiperButton
          selectedSlide={selectedSlide}
          direction="backwards"
          className="top-[50%] left-[5%]"
        >
          <FontAwesomeIcon
            className="text-[1.5rem] fslideArrow"
            icon={faArrowLeft}
          />
        </SwiperButton>
        {images?.map((img, index) => (
          <SwiperSlide key={index}>
            <LazyLoadImage
              wrapperClassName="w-full"
              className="w-full h-[100vh] object-cover cursor-grab active:cursor-grabbing"
              src={img.actual}
              placeholderSrc={img.lazy}
              effect="blur"
            />
          </SwiperSlide>
        ))}
        <SwiperButton direction="forwards" className="top-[50%] right-[5%]">
          <FontAwesomeIcon
            className="text-[1.5rem] slideArrow"
            icon={faArrowRight}
          />
        </SwiperButton>
      </Swiper>
      <UseAnimation
        reverse={caraouselDrop}
        onClick={() => setCaraouselDrop(false)}
        animation={maximizeMinimize}
        size={70}
        render={(eventProps, animationProps) => (
          <button
            {...eventProps}
            className="absolute z-50 right-[3%] bottom-[5%]"
          >
            <div {...animationProps}></div>
          </button>
        )}
      />
      {/* <div
      ref={circleRef}
      id="circle"
      className="w-10 h-10 rounded-full circle bg-black absolute top-0 left-0 z-50 transition-all ease duration-500"
    >
    </div> */}
    </div>
  );
}

function SwiperButton({ direction, className, children, selectedSlide }) {
  const swiper = useSwiper();
  useEffect(() => {
    if (selectedSlide !== null)
      setTimeout(() => {
        swiper.slideTo(selectedSlide, 1300);
      }, 400);
  }, [selectedSlide]);
  return (
    <button
      className={`absolute slideButton z-50 ${className}`}
      onClick={() =>
        direction === "forwards" ? swiper.slideNext() : swiper.slidePrev()
      }
    >
      {children}
    </button>
  );
}


    


export { NormalCaraousel, TitleCaraousel, DropDownCaraousel };
