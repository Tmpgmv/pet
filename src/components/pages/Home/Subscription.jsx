import React from "react";
import Button from "../../Button";
import EmailInput from "../../EmailInput";
import { API_URL_SUBSCRIPTION_PATH } from "../../../general/constants";
import $ from "jquery";
import { toast } from "react-toastify";
import { clear } from "../../FormValidation";
import H2 from "../../H2";

// function clear() {
//   $(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
// }

function clearEmailInput() {
  $("#email").val("");
}

function Subscription() {
  const notifyFailure = () => toast.error("Не удалось подписаться!");
  const notifySuccess = () => toast.success("Вы подписаны на новости.");

  function handleSubmit(event, formId) {
    event.preventDefault();
    clear();

    let formData = $("#" + formId).serialize();

    let request = $.ajax({
      url: API_URL_SUBSCRIPTION_PATH,
      method: "POST",
      data: formData,
      dataType: "json",
    });

    request.done(function (data, textStatus, jqXHR) {
      notifySuccess();
      clearEmailInput();
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {
      notifyFailure();
      let responseJson = jqXHR.responseJSON;

      let errors = responseJson.error.errors;

      $.each(errors, function (key, data) {
        let unitedErrorText = data.join();
        $("#" + key).addClass("is-invalid");
        let selector = "#" + key + "Error";
        $(selector).text(unitedErrorText);
      });
    });
  }

  const ID = "subscription";

  return (
    <div>
      <H2 h2="Подписка на новости" aClassName="mt-4 mb-4" />
          <form
            id={ID}
            method="post"
            className="row g-3 mt-2 col-12 col-md-6 mx-auto"
            onSubmit={(event) => handleSubmit(event, "subscription")}
          >
            <EmailInput id={ID} />
            <Button btnText="Подписаться" aClassName="mt-3" />
          </form>
    </div>
  );
}

export default Subscription;
