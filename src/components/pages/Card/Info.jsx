import $ from "jquery";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_PETS_URL } from "../../../general/constants";
import getToken from "../../../general/getToken.js";
import InfoRow from "../../InfoRow";

function Info({ cardId }) {
  
  useEffect(() => {
    requestData();    
  }, []);

  const [cardInfo, setCardInfo] = useState({
    kind: "",
    mark: "",
    district: "",
    date: "",
    description: "",
    phone: "",
    email: "",
    name: "",
    photo0: "",
    photo1: "",
    ptoto2: ""
  });

  function requestData() {    

    let url = API_PETS_URL + "/" + 827;
    
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {
        debugger;
        setCardInfo({
          kind: dataJson.data.pet.name || "",
          mark: dataJson.data.pet.mark || "",
          district: dataJson.data.pet.district || "",
          date: dataJson.data.pet.date || "",
          description: dataJson.data.pet.description || 0,
          phone: dataJson.data.pet.phone || 0,
          email: dataJson.data.pet.email || 0,
          name: dataJson.data.pet.name || 0,
          photo0: dataJson.data.pet.photos[0],
          photo1: dataJson.data.pet.photos[1],
          photo2: dataJson.data.pet.photos[2],
        });
      })
      .fail((jqXHR) => {
        toast.error("Не удалось получить данные с сервера!");
        // Optional: handle error fields here if needed
      });
  }
  
  return (
    
    <div className="container text-start info col col-md-8 mt-4">
      <InfoRow caption="Вид" value={cardInfo.kind} />
      <InfoRow caption="Чип" value={cardInfo.mark} />
      <InfoRow caption="Район" value={cardInfo.district} />
      <InfoRow caption="Дата" value={cardInfo.date} />
      <InfoRow caption="Описание" value={cardInfo.description} />
      <InfoRow caption="Телефон" value={cardInfo.phone} isPhone={true} />
      <InfoRow caption="Email" value={cardInfo.email} isEmail={true} />
      <InfoRow caption="Имя нашедшего" value={cardInfo.name} />
    </div>
  );
}

export default Info;
