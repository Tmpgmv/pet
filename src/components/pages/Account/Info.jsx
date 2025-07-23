import H1 from "../../H1";
import InfoRow from "../../InfoRow";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  API_URL_USERS_PATH,
  API_URL_USERS_POSTS,
} from "../../../general/constants";
import getToken from "../../../general/getToken.js";
import $ from "jquery";

const Info = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    registrationDate: "",
    ordersCount: "",
    petsCount: "",
  });

  function requestInfo() {
    const token = getToken();

    $.ajax({
      url: API_URL_USERS_PATH,
      method: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      dataType: "json",
    })
      .done((data) => {
        setUserInfo({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          registrationDate: data.registrationDate || "",
          ordersCount: data.ordersCount || "",
          petsCount: data.petsCount || "",
        });
      })
      .fail((jqXHR) => {
        toast.error("Не удалось получить данные с сервера!");
        // Optional: handle error fields here if needed
      });
  }

  function requestPosts() {
    const token = getToken();

    $.ajax({
      url: API_URL_USERS_POSTS,
      method: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      dataType: "json",
    })
      .done((data) => {
        // Do something with posts if needed
      })
      .fail(() => {
        toast.error("Не удалось получить данные с сервера!");
      });
  }

  useEffect(() => {
    requestInfo();
    requestPosts();
  }, []);

  return (
    <section id="info-section" className="mt-5">
      <H1 h1="Информация о пользователе" />
      <div className="container text-start info col col-md-8 mt-4">
        <InfoRow id="name" caption="Имя" value={userInfo.name} />
        <InfoRow
          id="userEmail"
          caption="Email"
          value={userInfo.email}
          isEmail={true}
        />
        <InfoRow
          id="userPhone"
          caption="Телефон"
          value={userInfo.phone}
          isPhone={true}
        />
        <InfoRow
          id="registeredOn"
          caption="Зарегистрирован"
          value={userInfo.registrationDate}
        />
        <InfoRow
          id="numberOfposts"
          caption="Количество объявлений"
          value={userInfo.ordersCount}
        />
        <InfoRow
          id="numberOfFoundPets"
          caption="Найдено животных"
          value={userInfo.petsCount}
        />
      </div>
    </section>
  );
};

export default Info;