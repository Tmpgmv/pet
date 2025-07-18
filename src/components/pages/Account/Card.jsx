import React from "react";
import geo from "../../../assets/images/geo.svg";
import calendar from "../../../assets/images/calendar.svg";
import status from "../../../assets/images/status.svg";
import Img from "../../Img";
import Button from "../../Button";

function Card({ src, alt }) {
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
            <div className="w-75 text-start my-auto fw-bold">
              30 июня 2025 г.
            </div>
          </div>
          <div className="row mt-2 mh-3em">
            <div className="w-25 text-end">
              <Img src={geo} height="30" alt="geo" />
            </div>
            <div className="w-75 text-start my-auto fw-bold ">
              Красногвардейский район
            </div>
          </div>
          <div className="row mt-2 mb-2">
            <div className="w-25 text-end">
              <img src={status} height="30" alt="status" />
            </div>
            <div className="w-75 text-start my-auto fw-bold">Активное</div>
          </div>

          <Button btnText="Подробнее" aClassName="w-100" />
        </div>
      </div>
    </div>
  );
}

export default Card;
