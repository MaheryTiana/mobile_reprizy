import  mercedes from "../../assets/images/mercedes.jpg";
import '../../assets/css/carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Carousel({image}) {
    


return (
    <>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {image!==null && image.map((img:string,ind:number) =>(
      <SwiperSlide key={ind}>
        <img style={{width:"100%",height:"100%"}} src={img}/>
      </SwiperSlide>
              
    )

)}
        
      </Swiper>
    </>
  );
}