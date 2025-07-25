import { Link } from "react-router-dom";
import FormSingleAction from "../../FormSingleAction";

function EditDelete() {
  // 1. Ctrl + h, deleteConfirmationModal -> deleteConfirmationModal
  return (
    <div className="d-flex flex-column flex-md-row align-items-center">
      <div className="d-inline-flex ms-md-auto">
        <Link to="/login" className="ps-3 pe-3 edit pointer allUnset"/>        
        <button
          type="button"
          className="ps-3 pe-3 delete pointer allUnset"
          data-bs-toggle="modal"
          data-bs-target="#deleteConfirmationModal"
        >
  
</button>
        {/* <FormSingleAction id="delete" inputClassName="ps-3 pe-3 allUnset"/>         */}
      </div>
    </div>
  );
}

export default EditDelete;
