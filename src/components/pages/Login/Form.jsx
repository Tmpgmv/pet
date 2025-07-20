import { Link } from "react-router-dom";
import Button from "../../Button";
import EmailInput from "../../EmailInput";
import PasswordInput from "../../PasswordInput";
import { API_URL_LOGIN_PATH } from "../../constants";
import $ from "jquery";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function clear() {
  $(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
}

function saveToken(token){
  localStorage.setItem("token", token);
}

function Form(props) {
  const navigate = useNavigate();
  const notifyFailure = () => toast.error("Не удалось войти!");

  function handleSubmit(event, formId) {
    event.preventDefault();
    clear();

    let formData = $("#" + formId).serialize();

    let request = $.ajax({
      url: API_URL_LOGIN_PATH,
      method: "POST",
      data: formData,
      dataType: "html",
    });

    request.done(function (data, textStatus, jqXHR) {
      debugger;
      let dataJson = JSON.parse(data);
      let token = dataJson.data.token;
      saveToken(token)

      navigate("/account", {
        state: { toast: "Вы вошли." },
      });
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {
      notifyFailure();

      let responseText = jqXHR.responseText;

      if (responseText) {
        let responseTextJson = $.parseJSON(responseText);
        let errors = responseTextJson.error.error;

        $.each(errors, function (key, data) {
          let unitedErrorText = data.join();
          $("#validationServerEmail").addClass("is-invalid");
          let selector = "#" + key + "Error";
          $(selector).text(unitedErrorText);
        });
      }
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
