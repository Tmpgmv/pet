import $ from "jquery";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {
  API_URL_USERS_PATH
} from "../../../general/constants";
import getToken from "../../../general/getToken.js";
import H1 from "../../H1";
import InfoRow from "../../InfoRow";

const Info = () => {
  const location = useLocation();
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
        debugger;      
        setUserInfo({
          name: data.name,
          email: data.email,
          phone: data.phone,
          registrationDate: data.registrationDate,
          ordersCount: data.ordersCount || 0,
          petsCount: data.petsCount || 0,
        });
      })
      .fail((jqXHR) => {
        const toastData = location.state?.toast;
        toast["error"]("Не удалось получить с сервера данные о пользователе!", {
          toastId: "info",
        });
      });
  }


  useEffect(() => {
    requestInfo();
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