import $ from "jquery";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_PETS_URL } from "../../../general/constants";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Main from "./Main";
import { useLocation, useParams } from "react-router-dom";
import DeleteConfirmation from "./DeleteConfirmation"

function Index() {
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    requestData();
  }, []);

  const [cardInfo, setCardInfo] = useState({
    id: "",
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
    ptoto2: "",
  });

  function requestData() {
    let url = API_PETS_URL + "/" + params.petId;    
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {        
        setCardInfo({
          id: dataJson.data.pet.id || "",
          kind: dataJson.data.pet.kind || "",
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
        const toastData = location.state?.toast;
        toast["error"]("Не удалось получить данные с сервера!", {
          toastId: "index",
        });
      });
  }

  return (
    <>
      <Header />
      <Main cardInfo={cardInfo} />
      <DeleteConfirmation />
      <Footer />      
    </>
  );
}

export default Index;
