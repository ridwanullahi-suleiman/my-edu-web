import React from 'react'
import './Swiper.css'
import user from  '../../assets/user2.jpg'
import user2 from '../../assets/about_profile-kNAyOvDL.svg'
import user3 from '../../assets/african-american.jpg'
import user4 from '../../assets/user-1.png'
import user5 from '../../assets/user-2.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


export default function App() {
  return (
    <>
    <Swiper
    slidesPerView={2}
    spaceBetween={10}
    freeMode={true}
    pagination={{
      clickable: true,
      breakpoints:{
        960:{
            slidesPerView: 1
        }
      }
     
    }
}
    
    modules={[FreeMode, Pagination]}
    className="mySwiper"
  >
        <SwiperSlide className='testimony'>
        <div className='avatar'>
        <img src={user}/>
     </div>
  
     <div className='Testimonial-info'>
         <h5>Synthtic Sugar</h5>
         <small>Student</small>
     </div>
       
      <div className='testimonial-body'>
           <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>

      </div>
        </SwiperSlide>

        <SwiperSlide className='testimony'>
        <div className='avatar'>
        <img src={user2}/>
     </div>
  
     <div className='Testimonial-info'>
         <h5>Synthtic Sugar</h5>
         <small>Student</small>
     </div>
       
      <div className='testimonial-body'>
           <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>

      </div>
        </SwiperSlide>

        <SwiperSlide className='testimony'>
        <div className='avatar'>
        <img src={user3}/>
     </div>
  
     <div className='Testimonial-info'>
         <h5>Synthtic Sugar</h5>
         <small>Student</small>
     </div>
       
      <div className='testimonial-body'>
           <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>

      </div>
        </SwiperSlide>
        <SwiperSlide className='testimony'>
        <div className='avatar'>
        <img src={user4}/>
     </div>
  
     <div className='Testimonial-info'>
         <h5>Synthtic Sugar</h5>
         <small>Student</small>
     </div>
       
      <div className='testimonial-body'>
           <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>

      </div>
        </SwiperSlide>
        <SwiperSlide className='testimony'>
        <div className='avatar'>
        <img src={user5}/>
     </div>
  
     <div className='Testimonial-info'>
         <h5>Synthtic Sugar</h5>
         <small>Student</small>
     </div>
       
      <div className='testimonial-body'>
           <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>

      </div>
        </SwiperSlide>
        <SwiperSlide className='testimony'>
        <div className='avatar'>
        <img src={user2}/>
     </div>
  
     <div className='Testimonial-info'>
         <h5>Synthtic Sugar</h5>
         <small>Student</small>
     </div>
       
      <div className='testimonial-body'>
           <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>

      </div>
        </SwiperSlide>

      </Swiper>

    </>
  );
}