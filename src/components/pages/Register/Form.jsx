import Button from "../../Button";
import CheckboxInput from "../../CheckboxInput";
import EmailInput from "../../EmailInput";
import NameInput from "../../NameInput";
import PasswordConfirmationInput from "../../PasswordConfirmationInput";
import PasswordInput from "../../PasswordInput";
import PhoneInput from "../../PhoneInput";
import { API_URL_REGISTRATION_PATH } from "../../../general/constants";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clear } from "../../FormValidation";

function Form({ formId }) {
  const navigate = useNavigate();
  function notifyFailure() {
    toast.error("Не удалось зарегистрировать пользователя!");
  }

  function handleSubmit(event) {
    event.preventDefault();
    clear();

    let formData = $("#" + formId).serialize();

    let request = $.ajax({
      url: API_URL_REGISTRATION_PATH,
      method: "POST",
      data: formData,
      dataType: "json",
    });

    request.done(function (data, textStatus, jqXHR) {
      navigate("/login", {
        state: {
          toast: {
            message: "Пользователь успешно зарегистрирован.",
            type: "success",
          },
        },
      });
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {
      notifyFailure();

      let responseText = jqXHR.responseText;

      if (responseText) {
        let responseJson = jqXHR.responseJSON;

        let errors = responseJson.error.errors;

        $.each(errors, function (key, data) {
          let unitedErrorText = data.join();
          $("#" + key).addClass("is-invalid");
          let selector = "#" + key + "Error";
          $(selector).text(unitedErrorText);
        });
      }
    });
  }

  return (
    <form
      id={formId}
      method="post"
      className="row g-3 mt-2 col-12 col-md-6 mx-auto"
      onSubmit={(event) => handleSubmit(event)}
    >
      <NameInput />

      <PhoneInput />

      <EmailInput />

      <PasswordInput extendedLabel={true} />

      <PasswordConfirmationInput />

      <CheckboxInput
        name="confirm"
        label="Согласие на обработку персональных данных"
        errorMessage="Необходимо согласиться."
        isRequired={true}
      />

      <div className="col-12">
        <Button btnText="Зарегистрироваться" />
      </div>
    </form>
  );
}

export default Form;
