import React from "react";
import PhoneInput from "../../PhoneInput";
import EmailInput from "../../EmailInput";
import NameInput from "../../NameInput";
import PasswordInput from "../../PasswordInput";
import PasswordConfirmationInput from "../../PasswordConfirmationInput";
import Button from "../../Button";
import CheckboxInput from "../../CheckboxInput";

function Form() {
  return (
    <form
      id="registration-form"
      method="post"
      className="row g-3 mt-2 col-12 col-md-6 mx-auto"
    >
      <NameInput />

      <PhoneInput />

      <EmailInput />

      <PasswordInput />

      <PasswordConfirmationInput />

      <CheckboxInput
        name="confirm"
        label="Согласие на обработку персональных данных"
        errorMessage="Необходимо согласиться."
        isRequired={true}
      />

      <div className="col-12">
        <Button btnText="Зарегистрироваться" />
      </div>
    </form>
  );
}

export default Form;
