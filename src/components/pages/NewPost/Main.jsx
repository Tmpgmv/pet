import React from "react";
import NameInput from "../../NameInput";
import PhoneInput from "../../PhoneInput";
import PasswordInput from "../../PasswordInput";
import EmailInput from "../../EmailInput";
import KindInput from "../../KindInput";
import MarkInput from "./MarkInput";
import DescriptionInput from "./DescriptionInput";
import ImageInput from "./ImageInput";
import PasswordConfirmationInput from '../../PasswordConfirmationInput';
import Button from "../../Button";


function Main() {
  return (
    <section id="new-post-section" className="mt-5">
      <h1 className="text-center  line-hight-08">Новое объявление</h1>
      <form
        id="new-post-form"
        method="post"
        encType="multipart/form-data"
        className="row g-3 mt-2 col-12 col-md-6 mx-auto"
      >
        <NameInput />
        
        <PhoneInput />

        <EmailInput />

        <KindInput />

        <MarkInput />

        <DescriptionInput />

        <ImageInput aLabel={true}/>

        <ImageInput />

        <ImageInput />

        <div>
          <div className="form-check">
            <input
              className="form-check-input is-invalid"
              type="checkbox"
              defaultValue=""
              id="validationServerConfirm"
              aria-describedby="confirmError"
              name="confirm"
              required=""
            />
            <label
              className="form-check-label"
              htmlFor="validationServerConfirm"
            >
              Согласие на обработку персональных данных
            </label>
            <div id="confirmError" className="invalid-feedback">
              Необходимо согласиться.
            </div>
          </div>
        </div>
        <div>
          <div className="form-check">
            <input
              className="form-check-input is-invalid"
              type="checkbox"
              defaultValue=""
              id="validationServerRegister"
              aria-describedby="registerError"
              name="register"
            />
            <label
              className="form-check-label"
              htmlFor="validationServerRegister"
            >
              Пройти автоматическую регистрацию
            </label>
            <div id="registerError" className="invalid-feedback">
              Проблема на сервере.
            </div>
          </div>
        </div>

        <PasswordInput />

        <PasswordConfirmationInput />

        <div className="col">
          <Button btnText="Опубликовать" />          
        </div>
      </form>
    </section>
  );
}

export default Main;
