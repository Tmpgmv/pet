import CardAction from "./CardAction";
import FormSingleAction from "../../FormSingleAction";

function EditDelete() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center">
      <div className="d-inline-flex ms-md-auto">
        <FormSingleAction id="edit" />
        <FormSingleAction id="delete" />        
      </div>
    </div>
  );
}

export default EditDelete;
