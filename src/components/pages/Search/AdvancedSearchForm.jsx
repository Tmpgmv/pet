import $ from "jquery";
import "jquery-ui/ui/widgets/autocomplete";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../Button";
import DistrictInput from "../../DistrictInput";
import KindInput from "../../KindInput";
import { API_ADVANCED_SEARCH_URL } from "../../../general/constants";
import { clearSeachResult } from "../../../general/clearSearchResult";
import { clear } from "../../FormValidation";
import { showSpinner } from "../Home/Spinner";

function areAllInputFieldsValid() {
  let result = false;

  let isDistricSelected = !($("#district").val() === "");
  let isKindInput = !($("#kind").val()?.trim() === "");

  if (!(isDistricSelected || isKindInput)) {
    $(".form-control").addClass("is-invalid");
  }

  result = true;

  return result;
}





function AdvancedSearchForm() {
  const FORM_ID = "advanced-search";
  const navigate = useNavigate();

  async function getSearchResults(event) {
    event.preventDefault();

    clearSeachResult();
    clear();
    await showSpinner();

    if (!areAllInputFieldsValid()) {
      return;
    }

    let formData = $("#" + FORM_ID).serialize();
    $.ajax({
      url: API_ADVANCED_SEARCH_URL,
      data: formData,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {
        const items = dataJson.data.orders;
        navigate("/search", { state: { items } });
      })
      .fail((data) => {
        toast["error"]("Не удалось получить данные с сервера!", {
          toastId: "foundAnimals",
        });
      });
  }

  return (
    <form
      id={FORM_ID}
      className="mt-4 col-md-6 mx-auto"
      method="get"
      onSubmit={function (event) {
        getSearchResults(event);
      }}
    >
      <DistrictInput required={false} selectClassName="form-select mb-2" />

      <KindInput
        aClassName="mt-3"
        required={false}
        errorMessage="Выберите район, вид или и то, и другое."
      />

      <Button aClassName="mt-3" btnText="Поиск" />
    </form>
  );
}

export default AdvancedSearchForm;
