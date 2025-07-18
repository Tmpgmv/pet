import React from "react";
import CarouselIndicator from "./CarouselIndicator";
import CarouselButton from "./CarouselButton";
import CarouselItem from "./CarouselItem";

function Carousel() {
  return (
    <section id="carousel-section" className="mt-5">
      <h2 className="text-center line-hight-08">Недавно вернулись домой</h2>
      <div id="carousel" className="carousel slide">
        <div className="carousel-indicators">
          <CarouselIndicator
            slideTo={0}
            label="Slide 1"
            active={true}
            current={true}
          />
          <CarouselIndicator slideTo={1} label="Slide 2" />
          <CarouselIndicator slideTo={2} label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <CarouselItem
            src="https://placebear.com/674/400"
            h5="Кошка"
            p="Очень ласковая"
            alt="cat"
            activeClass="active"
          />
          <CarouselItem
            src="https://placebear.com/674/400"
            h5="Жираф"
            p="Крутой"
            alt="giraffe"
          />
          <CarouselItem
            src="https://placebear.com/674/400"
            h5="Собака"
            p="Сенбернар"
            alt="dog"
          />
        </div>

        <CarouselButton previous="true" hidden="true" />
        <CarouselButton />
      </div>
    </section>
  );
}

export default Carousel;
