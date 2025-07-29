import $ from "jquery";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_PETS_URL } from "../../../general/constants";
import Button from "../../Button";
import DescriptionInput from "../../DescriptionInput";
import ImageInput from "../../ImageInput";
import KindInput from "../../KindInput";
import MarkInput from "../../MarkInput";

import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { PETS } from "../../../general/constants";
import getToken from "../../../general/getToken";


function Main({ formId }) {

  const location = useLocation();
  const TOKEN = getToken();
  
  const notifyFailure = (message) =>
    toast.error(message);

  const { postId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);

  const url = `${API_PETS_URL}/${postId}`;

  useEffect(() => {

    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {        
        const pet = dataJson.data.pet;
        setFormData({
          id: pet.id,
          kind: pet.kind,
          mark: pet.mark,
          district: pet.district,
          description: pet.description,
          phone: pet.phone,
          email: pet.email,
          name: pet.name,
          photo0: pet.photos[0],
          photo1: pet.photos[1],
          photo2: pet.photos[2],
        });
      })
      .fail(() => {        
        notifyFailure("Не удалось получить с сервера данные об изменяемом объявлении.");
      });
  }, []);

  

  function handleSubmit(event){
      event.preventDefault();     


    
    let theForm = document.getElementById(formId);
    let formData = new FormData(theForm);
    let request = $.ajax({
      url: url,
      method: "POST",
      data: formData,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN);
      },
      contentType: false,
      processData: false,
      dataType: "json",
    });

    request.done(function (dataJson, textStatus, jqXHR) {      
      navigate("/pets/" + postId, {
        state: {
          toast: {
            type: "success",
            message: "Объявление опубликовано.",
          },
          from: location,
        },
      });
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {      
      notifyFailure();      

      let responseText = jqXHR.responseText;

      if (responseText) {
        let responseTextJson = $.parseJSON(responseText);
        let errors = responseTextJson.error.errors;

        $.each(errors, function (key, data) {
          let unitedErrorText = data.join();
          $("#" + key).addClass("is-invalid");
          let selector = "#" + key + "Error";
          $(selector).text(unitedErrorText);
        });
      }
    });


  }





  return (
    <>
      <section id="new-post-section" className="mt-5">
        <h1 className="text-center  line-hight-08">Редактирование объявления</h1>
        <form
          id={formId}
          method="post"
          encType="multipart/form-data"
          className="row g-3 mt-2 col-12 col-md-6 mx-auto"
          onSubmit={(event) => handleSubmit(event)}
        >
          <KindInput defaultValue={formData?.kind}/>

          <ImageInput id="photo1" aLabel={true} required={true} defaultValue={formData?.photo1}/>

          <ImageInput id="photo2"  defaultValue={formData?.photo2} />

          <ImageInput id="photo3"  defaultValue={formData?.photo3} />

          <MarkInput defaultValue={formData?.mark}/>

          <DescriptionInput  defaultValue={formData?.description}/>


          <div className="col">
            <Button btnText="Сохранить" onSubmit={(event)=>handleSubmit(event)}/>
          </div>
        </form>
      </section>
    </>
  );
}

export default Main;
