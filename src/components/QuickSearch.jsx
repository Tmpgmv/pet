import $ from "jquery";
import "jquery-ui/ui/widgets/autocomplete";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_SEARCH_URL } from "../general/constants";
import Button from "./Button";

function QuickSearch({ nameOfClass = null }) {
  const ID = "quick-search-input";
  const [availableVariants, setAvailableVariants] = useState([]);

  function renewAvailableVariants(){
    $( "#" + ID).autocomplete({
      source: availableVariants
    });
  }

  function requestAvailableVariants() {
    $.ajax({
      url: API_SEARCH_URL,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {        
        let allAnimals = dataJson.data.orders;

        let tmpAvailableVariants = allAnimals.map((item)=>item.description)
        let tmpAvailableVariantsWithoutDuplicates = [...new Set(tmpAvailableVariants)];

        setAvailableVariants(tmpAvailableVariantsWithoutDuplicates);
      })
      .fail(() => {        
        toast["error"]("Не удалось получить данные с сервера!", {
          toastId: "foundAnimals",
        });
      });
  }

  useEffect(() => {
    requestAvailableVariants();    
  }, []);


  useEffect(() => {
  if (availableVariants.length > 0) {
    $("#" + ID).autocomplete({
      source: availableVariants
    });
  }
}, [availableVariants]);
      

  debugger;
  return (
    <div id="search-wrap">
      <form
        id="quick-search"
        className={nameOfClass ?? undefined}
        method="post"
      >
        <div className="input-group mb-3">
          <input
            id={ID}
            type="text"
            className="form-control"
            placeholder="Кого ищем?"
            aria-describedby="button-addon2"
            required={true}
          />

          <Button btnText="Поиск" />
        </div>
      </form>
    </div>
  );
}

export default QuickSearch;
