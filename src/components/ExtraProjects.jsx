import React from 'react';

// IMPORT SWIPER COMPONENTES (FROM NPM)
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// STYLES
import "../Styles/ExtraProjects.scss";

// IMAGES
import tw from '../../public/Images/twcap.jpg';
import cart from '../../public/Images/carritocap.jpg';
import barberia from "../../public/images/barberiacap.jpg";
import form from "../../public/images/formcap.jpg";
import todolist from "../../public/images/todolistcap.jpg";

export default function ExtraProjects({ texts }) {

  const goTw = () => {
    window.open('https://clone-twitter-d67f4.web.app/', '_blank');
  }

  const goCart = () => {
    window.open('https://nikorod.github.io/Carrito-React/', '_blank');
  }

  const goBarberia = () => {
		window.open('https://nikorod.github.io/Barberia/', '_blank');
	}

  const goForm = () => {
		window.open('https://nikorod.github.io/Form-design-ex/', '_blank');
	}

  const goToDo = () => {
		window.open('https://nikorod.github.io/ToDoList-react/', '_blank');
	}

  return (

    <div className="container">

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}

          coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          }}

          navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
          }}

          modules={[EffectCoverflow, Pagination, Navigation]}

          className="swiper_container"
        >

          <SwiperSlide>
            <img src={tw} alt="slide_image" onClick={goTw} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={cart} alt="slide_image" onClick={goCart} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={barberia} alt="slide_image" onClick={goBarberia} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={form} alt="slide_image" onClick={goForm} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={todolist} alt="slide_image" onClick={goToDo} />
          </SwiperSlide>

          <div className="slider-controler">

            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>

            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>

          </div>

        </Swiper>

    </div>

  );
}

