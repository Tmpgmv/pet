import $ from "jquery";
import "jquery-ui/ui/widgets/autocomplete";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_SEARCH_URL } from "../general/constants";
import Button from "./Button";

function QuickSearch({ nameOfClass = null }) {
  
  const FORM_ID = "quick-search";
  const INPUT_ID = "quick-search-input";
  const [availableVariants, setAvailableVariants] = useState([]);

  function refreshAvailableVariants() {
    $("#" + INPUT_ID).autocomplete({
      source: availableVariants,
      minLength: 4
    });
  }

  function requestAvailableVariants(query = null) {    
    let url = API_SEARCH_URL;
    
    if (query) {
      // Очень важно не написать
      // += "/?query=" + query;
      // Иначе будет редирект, а результата не будет.
        url += "?query=" + query;
      }

    
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {
        let allAnimals = dataJson.data.orders;

        let tmpAvailableVariants = allAnimals.map((item) => item.description);
        let tmpAvailableVariantsWithoutDuplicates = [
          ...new Set(tmpAvailableVariants),
        ];

        setAvailableVariants(tmpAvailableVariantsWithoutDuplicates);
        refreshAvailableVariants();
      })
      .fail((data) => {
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
      refreshAvailableVariants();
    }
  }, [availableVariants]);



  function getSearchResults(event){
    event.preventDefault();
    let formData = $("#" + FORM_ID).serialize();
        $.ajax({
      url: API_SEARCH_URL,
      data: formData,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {
        debugger;
      })
      .fail((data) => {
        debugger;
        toast["error"]("Не удалось получить данные с сервера!", {
          toastId: "foundAnimals",
        });
      });

  }


  return (
    <div id="search-wrap">
      <form
        id={FORM_ID}
        className={nameOfClass ?? undefined}
        method="post"
        onSubmit={function(event){getSearchResults(event);}}
      >
        <div className="input-group mb-3">
          <input
            id={INPUT_ID}
            type="text"            
            className="form-control"
            placeholder="Кого ищем?"
            name="query"
            aria-describedby="button-addon2"
            required={true}
            onChange={(e) =>
              setTimeout(() => {
                let userInput = e.target.value;
                if (userInput.length > 3)
                  requestAvailableVariants(e.target.value);
              }, 1000)
            }
          />

          <Button btnText="Поиск" />
        </div>
      </form>
    </div>
  );
}

export default QuickSearch;
