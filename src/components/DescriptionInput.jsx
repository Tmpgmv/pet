import { attr } from "../general/debugFunctions";

function DescriptionInput({defaultValue}) {
  

  const ID = "description";

  return (
    <div>
      <label htmlFor="validationServerDescription" className="form-label">
        Описание
      </label>
      <textarea
        className="form-control"
        id={ID}
        aria-describedby={`${ID}Error`}
        name={ID}
        rows={3}        
        defaultValue={defaultValue}
      />
      <div id={`${ID}Error`} className="invalid-feedback">
        Введите корректное описание.
      </div>
    </div>
  );
}

export default DescriptionInput;
