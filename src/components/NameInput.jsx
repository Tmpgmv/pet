import React from 'react';

function NameInput() {
    return (
        <div>
          <label htmlFor="validationServerName" className="form-label">
            Имя (кириллица, пробел, дефис)
          </label>
          <input
            type="text"
            className="form-control is-invalid"
            id="validationServerName"
            aria-describedby="nameError"
            name="name"
            pattern="[А-Яа-яЁё\s\-]+"
            required=""
          />
          <div id="nameError" className="invalid-feedback">
            Введите корректное имя.
          </div>
        </div>
    );
}

export default NameInput;