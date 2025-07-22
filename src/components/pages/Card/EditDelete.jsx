import CardAction from "./CardAction";
import FormSingleAction from "../../FormSingleAction";
import LinkWithImg from "../../LinkWithImg";
import pencil from "../../../assets/images/pencil.svg"

function EditDelete() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center">
      <div className="d-inline-flex ms-md-auto">
        <LinkWithImg to="/login" imgSrc="https://placebear.com/20/20" alt="pencil" className="edit ps-3 pe-3"/>
        <FormSingleAction id="delete" inputClassName="ps-3 pe-3"/>        
      </div>
    </div>
  );
}

export default EditDelete;
