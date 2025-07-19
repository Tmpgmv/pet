import { Link } from "react-router-dom";
import calendar from "../../../assets/images/calendar.svg";
import geo from "../../../assets/images/geo.svg";
import Button from "../../Button";

function FoundAnimalCard({ kind, src, alt, date, district }) {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary border-solid">
        <div className="card-header py-3 border-primary bs-primary-bg-subtle">
          <h4 className="my-0 fw-normal">{kind}</h4>
        </div>
        <div className="card-body">
          <img className="w-100" src={src} alt={alt} />
          <div className="row mt-2">
            <div className="w-25 text-end">
              <img src={calendar} height={30} alt="calendar" />
            </div>
            <div className="w-75 my-auto text-start fw-bold">{date}</div>
          </div>
          <div className="row mb-2 mh-3em">
            <div className="w-25 text-end">
              <img src={geo} height={30} alt="geo" />
            </div>
            <div className="w-75 my-auto text-start fw-bold ">{district}</div>
          </div>
          <Link to="/card">
            <Button btnText="Подробнее" aClassName="w-100" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FoundAnimalCard;
