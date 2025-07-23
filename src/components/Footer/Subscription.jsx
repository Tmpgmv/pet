import React from "react";
import Button from "../Button";
import EmailInput from "../EmailInput";
import { API_URL_SUBSCRIPTION_PATH } from "../../general/constants";
import $ from "jquery";
import { toast } from 'react-toastify';

function clear() {
  $(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
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


  const ID = "subscription";

  return (

    <div className="col-12 col-md">
      <h5>Новости</h5>
      <ul className="list-unstyled text-small">
        <li className="mb-1">
          <form id={ID} method="post" onSubmit={(event) => handleSubmit(event, "subscription")}>
            <EmailInput id={ID}/>
            <Button btnText="Подписаться" aClassName="mt-3" />
          </form>
        </li>
      </ul>
    </div>
  );
}

export default Subscription;
