import React, { useRef, useState } from 'react';
// Import Swiper React components
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function Sliders() {

const navigate=useNavigate();

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
            <div className="movingtxt">
              <motion.p initial={{opacity:0}} animate={{x:20, opacity:1}} transition={{delay:0.8, duration:0.5,}}>Quick dispatch from <motion.span animate={{color:'#ba943f' , font:18}}>$20</motion.span></motion.p>
              <motion.h2  initial={{opacity:0}} animate={{x:20, opacity:1}} transition={{delay:0.8,duration:0.7}}>
              Everyone’s Talking About		
              </motion.h2>
              <motion.h2 initial={{opacity:0}} animate={{x:20, opacity:1}} transition={{delay:0.5,duration:0.7}}>Sweeper and funnel.</motion.h2>
              <motion.button initial={{y:40,opacity:0}} animate={{y:-20,opacity:1}} transition={{delay:1,duration:1.1}}  whileTap={{scale:0.7}} className="movingbtn">Get Start</motion.button>
            </div>
            <img className="movingimg" src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/vt_interior_elements_home1_slide_3.jpg?v=1726387721" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="movingtxt">
              <motion.p initial={{opacity:0}} animate={{x:20, opacity:1}} transition={{delay:4.7, duration:1,}}>Quick dispatch from <motion.span animate={{color:'#ba943f' , font:18}}>$20</motion.span></motion.p>
              <motion.h2  initial={{opacity:0}} animate={{x:20, opacity:1}} transition={{delay:4.7,duration:1}}>
              Everyone’s Talking About		
              </motion.h2>
              <motion.h2 initial={{opacity:0}} animate={{x:20, opacity:1}} transition={{delay:4.8,duration:0.9}}>Sweeper and funnel.</motion.h2>
              <motion.button initial={{y:40,opacity:0}} animate={{y:-20,opacity:1}} transition={{delay:5,duration:1.1}}  whileTap={{scale:0.7}} className="movingbtn">Get Start</motion.button>
            </div>
            <img src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/vt_interior_elements_home1_slide_1.jpg?v=1726387720" />
           
        </SwiperSlide>
        <SwiperSlide>
        <div className="movingtxt">
              <motion.p initial={{opacity:0}} animate={{x:20, opacity:1}} transition={{delay:8.7, duration:1,}}>Quick dispatch from <motion.span animate={{color:'#ba943f' , font:18}}>$20</motion.span></motion.p>
              <motion.h2  initial={{opacity:0}} animate={{x:20, opacity:1}} transition={{delay:8.7,duration:0.8}}>
              Everyone’s Talking About		
              </motion.h2>
              <motion.h2 initial={{opacity:0}} animate={{x:20, opacity:1}} transition={{delay:8.9,duration:0.9}}>Sweeper and funnel.</motion.h2>
              <motion.button initial={{y:40,opacity:0}} animate={{y:-20,opacity:1}} transition={{delay:9,duration:1.1}}   className="movingbtn" onClick={()=>navigate("/category")}>Get Start</motion.button>
            </div>
            <img src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/vt_interior_elements_home1_slide_2.jpg?v=1726387721" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
