import { Link } from "react-router-dom";
import calendar from "../../../assets/images/calendar.svg";
import geo from "../../../assets/images/geo.svg";
import status from "../../../assets/images/status.svg";
import Button from "../../Button";
import Img from "../../Img";

function Card({ src, alt, date, district }) {
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
              <Img src={geo} height="30" alt="geo" />
            </div>
            <div className="w-75 text-start my-auto fw-bold ">{district}</div>
          </div>
          <div className="row mt-2 mb-2">
            <div className="w-25 text-end">
              <img src={status} height="30" alt="status" />
            </div>
            <div className="w-75 text-start my-auto fw-bold">Активное</div>
          </div>
          <Link to="/card">
            <Button btnText="Подробнее" aClassName="w-100" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
