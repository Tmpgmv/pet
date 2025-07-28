import $ from "jquery";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_CAROUSEL_URL, SERVER_URL } from "../../../general/constants";
import CarouselButton from "./CarouselButton";
import CarouselIndicator from "./CarouselIndicator";
import CarouselItem from "./CarouselItem";
import Spinner from "../../Spinner";


function Carousel() {

  const [carouselItems, setCarouselItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  function requestCarouselCards() {
    $.ajax({
      url: API_CAROUSEL_URL,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {        
        let carouselItemsJson = dataJson.data.pets;
        setCarouselItems(carouselItemsJson);
      })
      .fail(() => {        
        toast["error"]("Не удалось получить с сервера данные о вернувшихся домой животных!", {
          toastId: "carousel",
        });
      }).always(function() {         
        setIsLoading(false);
      });           
  }

  useEffect(() => {
    requestCarouselCards();
  }, []);  

  return (
    <section id="carousel-section" className="mt-5">
      <h2 className="text-center line-hight-08">Недавно вернулись домой</h2>
      
      {/* Показать спиннер, пока загружаются результаты поиска.*/}
      {isLoading && <Spinner />}

      <div id="carousel" className="carousel slide">
        

        <div className="carousel-indicators">

        {carouselItems.map((item, index) => (
          <CarouselIndicator
            key={`indicator${index}`}
            slideTo={index}
            label={`Slide ${index + 1}`}
            active={index === 0 ? true : undefined}
            current={index === 0 ? true : undefined}            
          />
        ))}

          {/* <CarouselIndicator
            slideTo={0}
            label="Slide 1"
            active={true}
            current={true}
          />
          <CarouselIndicator slideTo={1} label="Slide 2" />
          <CarouselIndicator slideTo={2} label="Slide 3" /> */}
        </div>
        <div className="carousel-inner">

        {carouselItems.map((item, index) => (
          <CarouselItem
            key={`item${index}`}
            src={SERVER_URL + item.image}
            h5={item.kind}
            p={item.description}
            alt={item.kind}
            activeClass={index === 0 ? "active" : undefined}
          />
        ))}

          {/* <CarouselItem
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
          />*/}
        </div> 

        <CarouselButton previous="true" hidden="true" />
        <CarouselButton />
      </div>
    </section>
  );
}

export default Carousel;
