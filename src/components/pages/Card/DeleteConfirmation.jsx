import $ from "jquery";
import { useLocation, useNavigate } from "react-router-dom";
import trash from "../../../assets/images/trash.svg";
import { ACCOUNT, API_URL_USERS_POSTS } from "../../../general/constants";
import getToken from "../../../general/getToken";
import Img from "../../Img";
import { toast } from "react-toastify";

function DeleteConfirmation({ cardId }) {
  // https://getbootstrap.com/docs/5.3/components/modal/#live-demo
  // 1. Ctrl + h, deleteConfirmationModal -> deleteConfirmationModal
  // 2. Crtl + h Modal title -> Внимание!
  // 3. btn-secondary -> btn-success
  // 4. btn-primary ->  btn-danger
  // 5. Текст надписи: Close - Отмена
  // 6. Save changes -> Удалить
  // 7. ... -> Подтверждаете удаление?

  // По обстановке.
  const token = getToken();
  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(event) {
    debugger;
    event.preventDefault();

    const deleteCardUrl = API_URL_USERS_POSTS + "/" + cardId;

    let request = $.ajax({
      url: deleteCardUrl,
      method: "DELETE",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      dataType: "json",
    });

    request.done(function (dataJson, textStatus, jqXHR) {      
      navigate(ACCOUNT, {
        state: {
          toast: {
            type: "success",
            message: "Объявление удалено.",
          },
          from: location,
        },
      });
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {            
      toast["error"](
        "Не удалось удалить объявление!",
        {
          toastId: "deleteCard",
        }
      );

      // Закрыть форму, сымитировав нажатие кнопки "Отмена".
      $("#cancel").trigger("click");

    });
  }

  return (
    <div
      className="modal fade"
      id="deleteConfirmationModal"
      tabIndex={-1}
      aria-labelledby="deleteConfirmationModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="deleteConfirmationModalLabel">
              <Img src={trash} alt="delete" />
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">Удалить объявление?</div>
          <div className="modal-footer">
            <button
              id="cancel"
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Отмена
            </button>
            <form
              id="delete"
              method="delete"
              onSubmit={(event) => handleSubmit(event)}
            >
              <button type="submit" className="btn btn-danger">
                Удалить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
