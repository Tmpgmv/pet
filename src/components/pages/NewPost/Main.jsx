/*
Если флаг register не взведен, просто емейла недостаточно 
для отнесения объявления к пользователю. Это будет анонимное объявление. 
Т.е. как свое ни один пользователь не сможет его увидеть (отредактировать / удалить).

Если флаг Register взведен, то требуются пароль и подтверждение.
Если флаг Register после этого снят, то можно допустить логическую ошибку, скрыв блок. Т.е. форма по факту
будет заполнена, но скрыта. Это будет логическая ошибка, потому что сервер не ждет флаг Register. Т.е. флаг 
будет на сервер отправлен, но это лишняя информация, ее сервер просто отбросит.
Вывод: будет логической ошибкой, если сервер получит пароли, а пользователь не хотел регистрироваться.

Правильный прием: средствами JavaScript надо обязательно удалить поля password и password_confirmation. 
Не очистить эти поля, а именно удалить.
Потому что если просто очистить, эти поля на сервер будут отправлены пустыми.

Если пароли на сервер отправлены, то будет попытка аутентификации.
Т.е. и зарегистрированный пользователь тоже должен отправить пароль.
Причина: Bearer + токен на сервер не отправляются.

Если пользователь не аутентифицирован, будет выполнена попытка 
зарегистрировать пользователя. И сразу отнести объявление к нему.
*/

import $ from "jquery";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clear } from "../../../components/FormValidation";
import { API_PETS_URL, PETS } from "../../../general/constants";
import getToken from "../../../general/getToken";
import { getUserInfo } from "../../../general/getUserInfo";
import Button from "../../Button";
import CheckboxInput from "../../CheckboxInput";
import DescriptionInput from "../../DescriptionInput";
import DistrictInput from "../../DistrictInput";
import EmailInput from "../../EmailInput";
import ImageInput from "../../ImageInput";
import KindInput from "../../KindInput";
import MarkInput from "../../MarkInput";
import NameInput from "../../NameInput";
import PasswordConfirmationInput from "../../PasswordConfirmationInput";
import PasswordInput from "../../PasswordInput";
import PhoneInput from "../../PhoneInput";

function Main({ formId }) {
  const location = useLocation();
  const TOKEN = getToken();
  const navigate = useNavigate();
  const notifyFailure = () =>
    toast.error("Не удалось опубликовать объявление!");

  // Управление флагом автоматической регистарции.
  const [doRegister, setDoRegister] = useState(false);

  function handleRegisterChange(event) {
    setDoRegister(event.target.checked);
  }


  const [userInfo, setUserInfo] = useState(getUserInfo());
  
  function handleSubmit(event) {
    event.preventDefault();
    clear();
    let theForm = document.getElementById(formId);
    let formData = new FormData(theForm);
    let request = $.ajax({
      url: API_PETS_URL,
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
      navigate(PETS + "/" + dataJson.data.id, {
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
      let responseJson = jqXHR.responseJSON;

      let errors = responseJson.error.errors;

      $.each(errors, function (key, data) {
        let unitedErrorText = data.join();
        $("#" + key).addClass("is-invalid");
        let selector = "#" + key + "Error";
        $(selector).text(unitedErrorText);
      });
    });
  }

  return (
    <section id="new-post-section" className="mt-5">
      <h1 className="text-center  line-hight-08">Новое объявление</h1>
      <form
        id={formId}
        method="post"
        encType="multipart/form-data"
        className="row g-3 mt-2 col-12 col-md-6 mx-auto"
        onSubmit={(event) => handleSubmit(event)}
      >
        <DistrictInput />

        <NameInput defaultValue={userInfo.name}/>

        <PhoneInput defaultValue={userInfo.phone}/>

        <EmailInput defaultValue={userInfo.email}/>

        <KindInput />

        <MarkInput />

        <DescriptionInput />

        <ImageInput id="photo1" aLabel={true} required={true} />

        <ImageInput id="photo2" />

        <ImageInput id="photo3" />

        <CheckboxInput
          name="confirm"
          label="Согласие на обработку персональных данных"
          errorMessage="Необходимо согласиться."
          required={true}
        />

        <CheckboxInput
          name="register"
          label="Пройти автоматическую регистрацию"
          errorMessage="Проблема на сервере."
          onChange={handleRegisterChange}
          clientOnly={true}
        />

        <div id="passwords">
          {doRegister && (
            <>
              <PasswordInput />
              <PasswordConfirmationInput />
            </>
          )}
        </div>

        <div className="col">
          <Button btnText="Опубликовать" />
        </div>
      </form>
    </section>
  );
}

export default Main;
