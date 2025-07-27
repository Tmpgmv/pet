import { Link } from "react-router-dom";
import FormSingleAction from "../../FormSingleAction";

function EditDelete({petId}) {
  // 1. Ctrl + h, deleteConfirmationModal -> deleteConfirmationModal
  return (
    <div className="d-flex flex-column flex-md-row align-items-center">
      <div className="d-inline-flex ms-md-auto">
        <Link to={`/post/edit/${petId}`} className="ps-3 pe-3 edit pointer allUnset" />
        <button
          type="button"
          className="ps-3 pe-3 delete pointer allUnset"
          data-bs-toggle="modal"
          data-bs-target="#deleteConfirmationModal"
        ></button>
      </div>
    </div>
  );
}

export default EditDelete;
