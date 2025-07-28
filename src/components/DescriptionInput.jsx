import { attr } from "../general/debugFunctions";

function DescriptionInput({defaultValue}) {
  
  // Debug {
    var required = attr({debugValue: false, prodValue: true})    
  // } Debug

  return (
    <div>
      <label htmlFor="validationServerDescription" className="form-label">
        Описание
      </label>
      <textarea
        className="form-control"
        id="validationServerDescription"
        aria-describedby="descriptionError"
        name="description"
        rows={3}
        required={required}
        defaultValue={defaultValue}
      />
      <div id="descriptionError" className="invalid-feedback">
        Введите корректное описание.
      </div>
    </div>
  );
}

export default DescriptionInput;
