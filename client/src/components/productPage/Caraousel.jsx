import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'


// import required modules
import { Pagination,FreeMode } from 'swiper/modules';

function NormalCaraousel( {images} ) {
  return (
    <>
      <Swiper 
      style={{
        '--swiper-pagination-color': '#696b6e',
      }}
      lazy={true}
      pagination={true} 
      modules={[Pagination,FreeMode]}
      freeMode={true}
      className="mySwiper"
      >
        {images?.map((img,index) => (
        <SwiperSlide key={index}>
            <LazyLoadImage 
            wrapperClassName='w-full'
              className='aspect-[1/1] w-full object-cover cursor-grab active:cursor-grabbing'
              src={img.actual}
              placeholderSrc={img.lazy}
              effect='blur'
            />
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

function TitleCaraousel( {images} ) {
  return (
    <>
      <Swiper 
      style={{
        '--swiper-pagination-color': '#696b6e',
      }}
      spaceBetween={0}
      lazy={true}
      pagination={true} 
      modules={[Pagination,FreeMode]}
      freeMode={true}
      className="mySwiper"
      >
        {images?.map((img,index) => (
        <SwiperSlide key={index}>
          <div className='relative'>
            <LazyLoadImage 
              className='max-h-[400px] w-[100vw] object-cover cursor-grab active:cursor-grabbing'
              src={img.actual}
              placeholderSrc={img.lazy}
              effect='blur'
            />
            <div className='absolute top-0 left-0 bg-black opacity-20 w-full h-full'>
            </div>
            <div className='absolute flex justify-center w-full h-full items-center top-0 left-0'>
            <h3 className='text-[2.3rem] text-white' >{img.title}</h3>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}


export { 
  NormalCaraousel,
  TitleCaraousel
}