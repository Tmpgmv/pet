import H1 from "../../H1";
import InfoRow from "../../InfoRow";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  API_URL_USERS_PATH,
  API_URL_USERS_POSTS,
} from "../../../general/constants";
import $ from "jquery";
import getToken from "../../../general/getToken.js";
import { useNavigate } from "react-router-dom";

const NAME = "name";
const USER_EMAIL = "userEmail";
const USER_PHONE = "userPhone";
const REGISTERED_ON = "registeredOn";
const NUMBER_OF_POSTS = "numberOfposts";
const NUMBER_OF_FOUND_PETS = "numberOfFoundPets";

function showInfoData(dataJson) {
  $("#" + NAME).text(dataJson.name);
  $("#" + USER_PHONE).text(dataJson.phone);
  $("#" + USER_EMAIL).text(dataJson.email);
  $("#" + REGISTERED_ON).text(dataJson.registrationDate);
  $("#" + NUMBER_OF_POSTS).text(dataJson.ordersCount);
  $("#" + NUMBER_OF_FOUND_PETS).text(dataJson.petsCount);
}

function showPosts(dataJson) {
  let posts = dataJson.orders;

  debugger;
}

function Info() {
  

  function requestInfo() {
    let token = getToken();

    let request = $.ajax({
      url: API_URL_USERS_PATH,
      method: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      dataType: "json",
    });

    request.done(function (data, textStatus, jqXHR) {
      showInfoData(data);
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {      

      debugger;

      let responseText = jqXHR.responseText;

      if (responseText) {
        let responseTextJson = $.parseJSON(responseText);
        let errors = responseTextJson.error.error;

        $.each(errors, function (key, data) {
          let unitedErrorText = data;
          $("#validationServerEmail").addClass("is-invalid");

          key = "email"; // Временно. Баг в API: слали email, а прилетел ответ про phone.

          let selector = "#" + key + "Error";
          $(selector).text(unitedErrorText);
        });
      }
    });
  }

  function requestPosts() {
    // Объявления, добавленные пользователем.
    let token = getToken();

    let request = $.ajax({
      url: API_URL_USERS_POSTS,
      method: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      dataType: "json",
    });

    request.done(function (data, textStatus, jqXHR) {
      showPosts(data);
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {
      debugger;


      notifyFailure();

      let responseText = jqXHR.responseText;

      if (responseText) {
        let responseTextJson = $.parseJSON(responseText);
        let errors = responseTextJson.error.error;

        $.each(errors, function (key, data) {
          let unitedErrorText = data;
          $("#validationServerEmail").addClass("is-invalid");

          key = "email"; // Временно. Баг в API: слали email, а прилетел ответ про phone.

          let selector = "#" + key + "Error";
          $(selector).text(unitedErrorText);
        });
      }
    });
  }

  const notifyFailure = () =>
    toast.error("Не удалось получить данные с сервера!");

  useEffect(() => {
    requestInfo();
    requestPosts();
  }, []);

  return (
    <section id="info-section" className="mt-5">
      <H1 h1="Информация о пользователе" />

      <div className="container text-start info col col-md-8 mt-4">
        <InfoRow id={NAME} caption="Имя" value="Иван" />
        <InfoRow
          id={USER_EMAIL}
          caption="Email"
          value="info@example.com"
          isEmail={true}
        />
        <InfoRow
          id={USER_PHONE}
          caption="Телефон"
          value="8 (911) 234-56-78"
          isPhone={true}
        />
        <InfoRow
          id={REGISTERED_ON}
          caption="Зарегистрирован"
          value="01-01-1970"
        />
        <InfoRow
          id={NUMBER_OF_POSTS}
          caption="Количество объявлений"
          value="4"
        />
        <InfoRow
          id={NUMBER_OF_FOUND_PETS}
          caption="Найдено животных"
          value="2"
        />
      </div>
    </section>
  );
}

export default Info;
