import React from 'react';
import Img from '../../Img';
import trash from "../../../assets/images/trash.svg";

function DeleteConfirmation({cardId}) {
  // https://getbootstrap.com/docs/5.3/components/modal/#live-demo
  // 1. Ctrl + h, deleteConfirmationModal -> deleteConfirmationModal
  // 2. Crtl + h Modal title -> Внимание!
  // 3. btn-secondary -> btn-success 
  // 4. btn-primary ->  btn-danger 
  // 5. Текст надписи: Close - Отмена
  // 6. Save changes -> Удалить
  // 7. ... -> Подтверждаете удаление?

  // По обстановке.

    debugger;

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
            type="button"
            className="btn btn-success"
            data-bs-dismiss="modal"
          >
            Отмена
          </button>
          <button type="button" className="btn btn-danger">
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>



    );
}

export default DeleteConfirmation;