import $ from "jquery";
import { useLocation, useNavigate } from "react-router-dom";
import { ACCOUNT, API_NEW_POST_URL } from "../../../general/constants";
import getToken from "../../../general/getToken";
import Button from "../../Button";
import CheckboxInput from "../../CheckboxInput";
import EmailInput from "../../EmailInput";
import KindInput from "../../KindInput";
import NameInput from "../../NameInput";
import PasswordConfirmationInput from "../../PasswordConfirmationInput";
import PasswordInput from "../../PasswordInput";
import PhoneInput from "../../PhoneInput";
import DescriptionInput from "./DescriptionInput";
import ImageInput from "./ImageInput";
import MarkInput from "./MarkInput";

import { toast } from "react-toastify";

function clear() {
  $(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
}

function Main() {
  const location = useLocation();
  const TOKEN = getToken();
  const FORM_ID = "change-phone-form";
  const navigate = useNavigate();
  const notifyFailure = () =>
    toast.error("Не удалось опубликовать объявление!");

  function handleSubmit(event) {
    event.preventDefault();
    clear();
    debugger;
    let theForm = document.getElementById(FORM_ID);
    let formData = new FormData(theForm);
    let request = $.ajax({
      url: API_NEW_POST_URL,
      method: "POST",
      data: formData,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN);
      },
      contentType: false,
      processData: false,
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
    <section id="new-post-section" className="mt-5">
      <h1 className="text-center  line-hight-08">Новое объявление</h1>
      <form
        id={FORM_ID}
        method="post"
        encType="multipart/form-data"
        className="row g-3 mt-2 col-12 col-md-6 mx-auto"
        onSubmit={(event) => handleSubmit(event)}
      >
        <NameInput />

        <PhoneInput />

        <EmailInput />

        <KindInput />

        <MarkInput />

        <DescriptionInput />

        <ImageInput id="photo-1" aLabel={true} />

        <ImageInput id="photo-2" />

        <ImageInput id="photo-3" />

        <CheckboxInput
          name="confirm"
          label="Согласие на обработку персональных данных"
          errorMessage="Необходимо согласиться."
          isRequired={true}
        />

        <CheckboxInput
          name="register"
          label="Пройти автоматическую регистрацию"
          errorMessage="Проблема на сервере."
        />

        <div id="passwords">
          <PasswordInput required={false} />

          <PasswordConfirmationInput required={false} />
        </div>

        <div className="col">
          <Button btnText="Опубликовать" />
        </div>
      </form>
    </section>
  );
}

export default Main;
