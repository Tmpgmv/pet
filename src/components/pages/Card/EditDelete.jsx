import CardAction from "./CardAction";
import FormSingleAction from "../../FormSingleAction";

function EditDelete() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center">
      <div className="d-inline-flex ms-md-auto">
        <FormSingleAction id="edit" inputClassName="ps-3 pe-3"/>
        <FormSingleAction id="delete" inputClassName="ps-3 pe-3"/>        
      </div>
    </div>
  );
}

export default EditDelete;
