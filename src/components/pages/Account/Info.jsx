import $ from "jquery";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { API_URL_USERS_PATH } from "../../../general/constants";
import getToken from "../../../general/getToken.js";
import H1 from "../../H1";
import InfoRow from "../../InfoRow";
import {getUserInfo} from "../../../general/getUserInfo.js"

const Info = () => {
  const location = useLocation();
  let user = getUserInfo();
  const [userInfo, setUserInfo] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    registrationDate: user.registrationDate,
    ordersCount: user.ordersCount,
    petsCount: user.petsCount,
  });


  return (
    <section id="info-section" className="mt-5">
      <H1 h1="Информация о пользователе" />
      <div className="container text-start col col-md-8 mt-4 info">
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
