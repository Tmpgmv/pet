import CardAction from "./CardAction";

function EditDelete() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center">
      <div className="d-inline-flex ms-md-auto">
        <CardAction id="edit" />
        <CardAction id="delete" />
      </div>
    </div>
  );
}

export default EditDelete;
