import React from 'react';

import CarouselItem from './CarouselItem';
import FoundAnimalCard from './FoundAnimalCard';
import Search from './Search';
import About from './About';
import CarouselIndicator from './CarouselIndicator';




function Main() {
    return (
<main>
  <div id="intro">
      <About />
      <Search />
  </div>
  
  <section id="carousel-section" className="mt-5">
    <h2 className="text-center line-hight-08">Недавно вернулись домой</h2>
    <div id="carousel" className="carousel slide">
      <div className="carousel-indicators">
        <CarouselIndicator slideTo={0} label="Slide 1" active="true" current="true" />
        <CarouselIndicator slideTo={1} label="Slide 2" />
        <CarouselIndicator slideTo={2} label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <CarouselItem src="https://placebear.com/674/400" h5="Кошка" p="Очень ласковая" alt="cat" activeClass='active'/>
        <CarouselItem src="https://placebear.com/674/400" h5="Жираф" p="Крутой" alt="giraffe"/>
        <CarouselItem src="https://placebear.com/674/400" h5="Собака" p="Сенбернар" alt="dog"/>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  
  <section id="card-section" className="mt-5">
    <h2 className="text-center pb-1 line-hight-08">Найденные животные</h2>
    <div class="row row-cols-1 row-cols-md-3 mt-4 mb-3 text-center">      
        <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
        <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
        <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
        <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
        <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
        <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
    </div>
  </section>  
</main>



    );
}

export default Main;