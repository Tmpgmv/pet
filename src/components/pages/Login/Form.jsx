import { Link } from "react-router-dom";
import Button from "../../Button";
import EmailInput from "../../EmailInput";
import PasswordInput from "../../PasswordInput";
import { ACCOUNT, API_URL_LOGIN_PATH } from "../../../general/constants";
import $ from "jquery";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { clear } from "../../FormValidation";
import { API_URL_USERS_PATH } from "../../../general/constants";

function saveToken(token) {
  localStorage.setItem("token", token);
}

function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  const notifyFailure = () => toast.error("Не удалось войти!");

  function handleSubmit(event, formId) {
    event.preventDefault();
    clear();

    let formData = $("#" + formId).serialize();
    function saveUserInfo(data) {
      localStorage.setItem("name", data.name);
      localStorage.setItem("phone", data.phone);
      localStorage.setItem("email", data.email);
      localStorage.setItem("registrationDate", data.registrationDate);
      localStorage.setItem("ordersCount", data.ordersCount);
      localStorage.setItem("petsCount", data.petsCount);
    }

    function requestUserInfo(token) {
      $.ajax({
        url: API_URL_USERS_PATH,
        method: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        dataType: "json",
      })
        .done((data) => {
          saveUserInfo(data);
          navigate(ACCOUNT, {
            state: {
              toast: {
                type: "success",
                message: "Вы вошли.",
              },
              from: location,
            },
          });
        })
        .fail((jqXHR) => {
          throw new Error(
            "Не удалось получить с сервера данные о пользователе!"
          );
        });
    }

    $.ajax({
      url: API_URL_LOGIN_PATH,
      method: "POST",
      data: formData,
      dataType: "json",
    })
      .done(function (dataJson, textStatus, jqXHR) {
        let token = dataJson.data.token;
        saveToken(token);
        requestUserInfo(token);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        
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
    <form
      id="login-form"
      method="post"
      className="col-12 col-md-6 mx-auto mt-4"
      onSubmit={(event) => handleSubmit(event, "login-form")}
    >
      <EmailInput />
      <PasswordInput />

      <div className="d-flex align-items-center mt-3">
        <Button btnText="Войти" />

        <Link to="/register" className="ms-5 text-primary">
          Регистрация
        </Link>
      </div>
    </form>
  );
}

export default Form;
