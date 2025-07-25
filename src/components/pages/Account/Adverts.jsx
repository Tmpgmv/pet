import $ from "jquery";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  API_URL_USERS_POSTS
} from "../../../general/constants";
import getToken from "../../../general/getToken.js";
import H2 from "../../H2";
import Pagination from "../../Pagination";
import Card from "./Card";
import { useLocation, useParams } from "react-router-dom";

function Adverts() {
  const location = useLocation();

  const [userPosts, setUserPosts] = useState([]);

  function requestPosts() {
    debugger;
    const token = getToken();

    $.ajax({
      url: API_URL_USERS_POSTS,
      method: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      dataType: "json",
    })
      .done((dataJson) => {
        setUserPosts(dataJson);
      })
      .fail(() => {
        const toastData = location.state?.toast;
        toast["error"]("Не удалось получить данные с сервера!", {
          toastId: "adverts",
        });
      });
  }

  useEffect(() => {
    requestPosts();
  }, []);  

  debugger;
  return (    
    <section id="adverts" className="mt-5">
      <H2 h2="Мои объявления" />

      <div className="row row-cols-1 row-cols-md-3 mt-4 mb-3 text-center">
        <Card id="1" src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card id="1" src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card id="1" src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card id="1" src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card id="1" src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card id="1" src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card id="1" src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card id="1" src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card id="1" src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
      </div>

      <Pagination />
    </section>
  );
}

export default Adverts;
