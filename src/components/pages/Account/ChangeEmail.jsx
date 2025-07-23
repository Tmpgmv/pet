import Button from "../../Button";
import EmailInput from "../../EmailInput";
import H2 from "../../H2";
import { ACCOUNT, API_CHANGE_EMAIL_URL } from "../../../general/constants";
import getToken from "../../../general/getToken";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import $ from "jquery";
import { toast } from "react-toastify";


function clear() {
  $(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
}

function ChangeEmail() {
  const location = useLocation();
  const TOKEN = getToken();
  const FORM_ID = "change-email-form";
  const navigate = useNavigate();
  const notifyFailure = () => toast.error("Не удалось изменить email!");

  function handleSubmit(event) {
    event.preventDefault();
    clear();

    let formData = $("#" + FORM_ID).serialize();

    let request = $.ajax({
      url: API_CHANGE_EMAIL_URL,
      method: "PATCH",
      data: formData,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN);
      },
      dataType: "json",
    });

    request.done(function (data, textStatus, jqXHR) {
            navigate(ACCOUNT, {
              state: {
                toast: {
                  type: "success",
                  message: "Адрес электронной почты изменен.",
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
    <section id="change-email" className="mt-5">
      <H2 h2="Изменить email" />

      <form
        id={FORM_ID}
        className="mx-auto col col-md-8 mt-4"
        method="patch"
        onSubmit={(event) => handleSubmit(event)}
      >
        <EmailInput />

        <div className="col">
          <Button btnText="Сохранить" aClassName="mt-3" />
        </div>
      </form>
    </section>
  );
}

export default ChangeEmail;
