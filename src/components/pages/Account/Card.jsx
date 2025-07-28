import { useState } from "react";
import { Link } from "react-router-dom";
import calendar from "../../../assets/images/calendar.svg";
import geoImg from "../../../assets/images/geo.svg";
import cardStatusImg from "../../../assets/images/cardStatus.svg"
import Button from "../../Button";
import Img from "../../Img";




function Card({ id, src, alt, date, district, aStatus }) {   

  const [cardStatus, setCardStatus] = useState(getStatus());

  function getStatus(){
    const statuses = {
      "active": "Активное",
      "wasFound": "Хозяин найден",
      "onModeration": "На модерации",
      "archive": "В архиве"
    }

    return statuses[aStatus];
    
  }



  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary border-solid">
        <div className="card-header py-3 border-primary bs-primary-bg-subtle">
          <h4 className="my-0 fw-normal">Кошка</h4>
        </div>
        <div className="card-body">
          <Img src={src} aClassName="w-100" alt={alt} />

          <div className="row mt-2">
            <div className="w-25 text-end">
              <Img src={calendar} height="30" alt="calendar" />
            </div>
            <div className="w-75 text-start my-auto fw-bold">{date}</div>
          </div>
          <div className="row mt-2 mh-3em">
            <div className="w-25 my-auto text-end">
              <Img src={geoImg} height="30" alt="geo" />
            </div>
            <div className="w-75 text-start my-auto fw-bold ">{district}</div>
          </div>
          <div className="row mt-2 mb-2">
            <div className="w-25 text-end">
              <img src={cardStatusImg} height="30" alt="status" />
            </div>
            <div className="w-75 text-start my-auto fw-bold">{cardStatus}</div>
          </div>


          {/* Т.е. по техническому заданию НЕТ иного способа узнать, 
          добавлено ли объявление пользователем,
          кроме как сделав специальный запрос (см. Объявления, добавленные пользователем).
          
          Этот запрос у нас был сделан на странице с информацией о 
          пользователе. Поэтому мы пробросим эту информацию дальше.

          Иначе говоря, если перешли на страницу подробной информации
          о животном из личного кабинета, то увидим
          кнопки для удаления и редактирования объявления.

          Если как-то иначе (из поиска, с главной страницы или
          непосредственно по URL - не увидим кнопок удаления и редактирования).
          */}


          <Link to={`/pets/${id}`} state={{ belongsToCurrentUser: true }}>
            <Button btnText="Подробнее" aClassName="w-100" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
