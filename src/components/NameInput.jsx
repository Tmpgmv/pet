import {attr} from "../general/debugFunctions";

function NameInput({ defaultValue = null }) {
  {
    var required = attr({ debugValue: false, prodValue: true });
    var pattern = attr({ debugValue: ".*", prodValue: "[А-Яа-яЁё\\s\\-]+" });
  }
  
  return (
    <div>
      <label htmlFor="name" className="form-label">
        Имя (кириллица, пробел, дефис)
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        aria-describedby="nameError"
        name="name"
        pattern={pattern}
        required={required}
        defaultValue={defaultValue ? defaultValue : undefined}
      />
      <div id="nameError" className="invalid-feedback">
        Введите корректное имя.
      </div>
    </div>
  );
}

export default NameInput;
