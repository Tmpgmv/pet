import { Link } from "react-router-dom";
import calendar from "../../../assets/images/calendar.svg";
import geo from "../../../assets/images/geo.svg";
import Button from "../../Button";
import Img from "../../Img";

function Card({ id, kind, src, date, district }) {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary border-solid">
        <div className="card-header py-3 border-primary bs-primary-bg-subtle">
          <h2 className="my-0 fw-normal">{kind}</h2>
        </div>
        <div className="card-body">
          <Img src={src} aClassName="w-100" alt="pet" />

          <div className="row mt-2">
            <div className="w-25 text-end">
              <Img src={calendar} height={30} alt={kind} />
            </div>
            <div className="w-75 text-start my-auto fw-bold">
              {date}
            </div>
          </div>
          <div className="row mb-2 mh-3em">
            <div className="w-25 text-end my-auto">
              <Img src={geo} height={30} alt="geo" />
            </div>
            <div className="w-75 text-start my-auto fw-bold ">
              {district}
            </div>
          </div>
          <Link to={`/pets/${id}`}>
            <Button aClassName="w-100" btnText="Подробнее" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
