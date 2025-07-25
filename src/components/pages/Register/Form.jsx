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
import { toast } from 'react-toastify';
import {clear} from '../../FormValidation';

// function clear() {
//   $(".is-valid, .is-invalid").removeClass("is-valid is-invalid");  
// }



function Form({ formId }) {


  const navigate = useNavigate();
  const notifyFailure = () => toast.error("Не удалось зарегистрировать пользователя!");

  function handleSubmit(event, formId) {
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
        state: { toast: "Пользователь успешно зарегистрирован." }
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
          $("#validationServerEmail").addClass("is-invalid");
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
      onSubmit={(event) => handleSubmit(event, formId)}
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
