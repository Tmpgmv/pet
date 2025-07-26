import $ from "jquery";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL_USERS_POSTS, SERVER_URL } from "../../../general/constants";
import getToken from "../../../general/getToken.js";
import H2 from "../../H2";
import Pagination from "../../Pagination";
import Card from "./Card";
import { useLocation, useParams } from "react-router-dom";

function Adverts() {
  const location = useLocation();

  const [userPosts, setUserPosts] = useState([]);

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
      .done((dataJson) => {
        setUserPosts(dataJson.data.orders);
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

  return (
    <section id="adverts" className="mt-5">
      <H2 h2="Мои объявления" />

      <div className="row row-cols-1 row-cols-md-3 mt-4 mb-3 text-center">
        {userPosts.map((item) => (
          <Card
            id={item.id}
            src={SERVER_URL + item.photos}
            alt={item.kind}
            date={item.date}
            district={item.district}
            aStatus={item.status}
          />
        ))}
      </div>

      {/* <Pagination /> */}
    </section>
  );
}

export default Adverts;
