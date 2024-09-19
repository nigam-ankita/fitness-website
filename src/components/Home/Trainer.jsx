import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import trainer1 from '../../assets/trainer1.png';
import trainer2 from '../../assets/trainer2.png';
import './Trainer.css';

function Trainer() {
  return (
    <div className="trainer-container" id='Trainers'>
      <div className="content1">
        <h2>Our Trainers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquet fermentum. Suspendisse potenti. Cras commodo ante mauris, vel vulputate risus mattis a. Suspendisse potenti.</p>
        <button className="more-trainers-button">More Trainers</button>
      </div>
      <div className="slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <div className="trainer-card">
              <img src={trainer1} alt="Trainer 1" className='trainer1'/>
              <div className="trainer-info">
                <h3>Jack Drake</h3>
                <p>Trainer 1</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trainer-card">
              <img src={trainer2} alt="Trainer 2" className='trainer2'/>
              <div className="trainer-info">
                <h3>Nathaniel</h3>
                <p>Trainer 2</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trainer-card">
              <img src={trainer1} alt="Trainer 2" className='trainer2'/>
              <div className="trainer-info">
                <h3>Nathaniel</h3>
                <p>Trainer 2</p>
              </div>
            </div>
          </SwiperSlide>    
          <SwiperSlide>
            <div className="trainer-card">
              <img src={trainer2} alt="Trainer 2" className='trainer2'/>
              <div className="trainer-info">
                <h3>Nathaniel</h3>
                <p>Trainer 2</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Trainer;

