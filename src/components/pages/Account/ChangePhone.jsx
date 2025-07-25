import Button from "../../Button";
import H2 from "../../H2";
import PhoneInput from "../../PhoneInput";
import { ACCOUNT, API_CHANGE_PHONE_URL } from "../../../general/constants";
import getToken from "../../../general/getToken";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import $ from "jquery";
import { toast } from "react-toastify";
import {clear} from "../../FormValidation";


// function clear() {
//   $(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
// }

function ChangePhone() {

  const location = useLocation();
  const TOKEN = getToken();
  const FORM_ID = "change-phone-form";
  const navigate = useNavigate();
  const notifyFailure = () => toast.error("Не удалось изменить телефон!");

  function handleSubmit(event) {
    event.preventDefault();
    clear();

    let formData = $("#" + FORM_ID).serialize();

    let request = $.ajax({
      url: API_CHANGE_PHONE_URL,
      method: "PATCH",
      data: formData,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN);
      },
      dataType: "json",
    });

    request.done(function (data, textStatus, jqXHR) {
            navigate(ACCOUNT, {
              state: {
                toast: {
                  type: "success",
                  message: "Телефон изменен.",
                },
                from: location,
              },
            });
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {
      notifyFailure();

      let responseText = jqXHR.responseText;

      if (responseText) {
        let responseTextJson = $.parseJSON(responseText);
        let errors = responseTextJson.error.error;

        $.each(errors, function (key, data) {
          let unitedErrorText = data.join();
          $("#validationServerPhone").addClass("is-invalid");
          let selector = "#" + key + "Error";
          $(selector).text(unitedErrorText);
        });
      }
    });
  }

  return (
    <section id="change-phone" className="mt-5">
      <H2 h2="Изменить телефон" />

      <form
        id="change-phone-form"
        className="mx-auto col col-md-8 mt-4"
        method="patch"
        onSubmit={(event) => handleSubmit(event)}
      >
        <PhoneInput />

        <div className="col">
          <Button btnText="Сохранить" aClassName="mt-3" />
        </div>
      </form>
    </section>
  );
}

export default ChangePhone;
