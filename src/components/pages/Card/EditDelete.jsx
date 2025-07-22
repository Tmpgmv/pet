import { Link } from "react-router-dom";
import FormSingleAction from "../../FormSingleAction";

function EditDelete() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center">
      <div className="d-inline-flex ms-md-auto">
        <Link to="/login" className="ps-3 pe-3 edit pointer allUnset"/>        
        <FormSingleAction id="delete" inputClassName="ps-3 pe-3 allUnset"/>        
      </div>
    </div>
  );
}

export default EditDelete;
