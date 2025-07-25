import $ from "jquery";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { API_PETS_URL, SERVER_URL } from "../../../general/constants";
import H2 from "../../H2";
import FoundAnimalCard from "./FoundAnimalCard";

function FoundAnimals(props) {

  const [foundAnimals, setFoundAnimals] = useState([]);

  function requestFoundAnimals() {
    $.ajax({
      url: API_PETS_URL,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {
        let recentlyFoundAnimals = dataJson.data.orders;

        setFoundAnimals(recentlyFoundAnimals);
      })
      .fail(() => {        
        toast["error"]("Не удалось получить данные с сервера!", {
          toastId: "foundAnimals",
        });
      });
  }

  useEffect(() => {
    requestFoundAnimals();
  }, []);

  return (
    <section id="card-section" className="mt-5">
      <H2 h2="Найденные животные" />

      <div className="row row-cols-1 row-cols-md-3 mt-4 mb-3 text-center">
        {foundAnimals.map((item) => (
          <FoundAnimalCard
            id={item.id}
            kind={item.kind}
            src={SERVER_URL + item.photos}
            alt={item.alt}
            date={item.date}
            district={item.district}
          />
        ))}
      </div>
    </section>
  );
}

export default FoundAnimals;
