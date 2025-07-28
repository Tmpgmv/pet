import $ from "jquery";
import "jquery-ui/ui/widgets/autocomplete";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_SEARCH_URL } from "../general/constants";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { clear } from "../components/FormValidation";
import { useLocation } from "react-router-dom";


/*

ВАЖНО: при работе с jQuery UI autocomplete необходимо 
скрытьв вспомогательные сообщения. 

см. в style.css ui-helper-hidden-accessible


*/

function QuickSearch({ nameOfClass = null }) {  



  /* После поиска на главной странице необходимо передать
  *  поисковый запрос. Иначе при переадресации 
  *  поисковая строка будет очищена. */
  const location = useLocation();
  
  const { items = [], query = "" } = location.state || {};  

  const FORM_ID = "quick-search";
  const INPUT_ID = "quick-search-input";

  const [availableVariants, setAvailableVariants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function refreshAvailableVariants() {
    $("#" + INPUT_ID).autocomplete({
      source: availableVariants,
      minLength: 4,
    });
  }

  function requestAvailableVariants(query = null) {    
    let url = API_SEARCH_URL;
    if (query) url += "?query=" + query;

    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {        
        const descriptions = dataJson.data.orders.map((item) => item.description);
        const uniqueDescriptions = [...new Set(descriptions)];
        setAvailableVariants(uniqueDescriptions);
      })
      .fail(() => {        
        toast.error("Не удалось получить с сервера данные для поисковых подсказок!", {
          toastId: "availableVariantsError",
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

  function getSearchResults(event) {
    event.preventDefault();
    setIsLoading(true);
    clear();

    const formData = $("#" + FORM_ID).serialize();

    let queryString = $("#" + INPUT_ID).val();

    $.ajax({
      url: API_SEARCH_URL,
      data: formData,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {        
        const items = dataJson.data.orders;        
        navigate("/search", { state: { items, query: queryString } });
      })
      .fail(() => {        
        toast.error("Не удалось получить данные с сервера!", {
          toastId: "searchFail",
        });
      }).always(function() { 
        setIsLoading(false);
      });
  }

  return (
    <div id="search-wrap">
      <form
        id={FORM_ID}
        className={nameOfClass ?? undefined}
        method="get"
        onSubmit={getSearchResults}
      >
        <div className="input-group mb-3">
          <input
            id={INPUT_ID}
            type="text"
            className="form-control"
            placeholder="Кого ищем?"
            name="query"
            aria-describedby="button-addon2"
            required
            defaultValue={query ? query : undefined} // См. комментарий к const location.
            onChange={(e) => {
              const value = e.target.value;
              if (value.length > 3) {                
                setTimeout(() => requestAvailableVariants(value), 1000);
              }
            }}
          />
          <Button btnText="Поиск" />
        </div>
      </form>

      {/* Показать спиннер, пока загружаются результаты поиска.*/}
      {isLoading && (        
        <Spinner />
      )}
    </div>
  );
}

export default QuickSearch;
