import { useState } from 'react';

import carouselImages from '../../constants/images';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

import './Carousel.css';

function Carousel() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === carouselImages.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? carouselImages.length - 1 : slide - 1);
  };

  return (
    <div className="carousel-wrapper">
      <section className="carousel">
        <BsArrowLeftCircleFill
          className="arrow arrow__left"
          onClick={prevSlide}
        />
        {carouselImages.map((item, index) => {
          return (
            <div
              className={
                slide === index
                  ? 'carousel__images'
                  : 'carousel__images slide-hidden'
              }
              key={item.id}
            >
              <h1 className="carousel__header">{item.alt}</h1>
              <img src={item.src} alt={item.alt} className="carousel__slide" />
            </div>
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow__right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {carouselImages.map((item, index) => {
            return (
              <button
                key={item.id}
                className={
                  slide === index ? 'indicator' : 'indicator indicator-inactive'
                }
                onClick={() => setSlide(index)}
              ></button>
            );
          })}
        </span>
      </section>
      <section className="slide__descriptions">
        {carouselImages.map((item, index) => {
          return (
            <p
              key={item.id}
              className={
                slide === index
                  ? 'slide__description'
                  : 'slide__description slide__description-hidden'
              }
            >
              {item.desc}
            </p>
          );
        })}
      </section>
    </div>
  );
}

export default Carousel;
