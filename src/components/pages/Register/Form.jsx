import Button from "../../Button";
import CheckboxInput from "../../CheckboxInput";
import EmailInput from "../../EmailInput";
import NameInput from "../../NameInput";
import PasswordConfirmationInput from "../../PasswordConfirmationInput";
import PasswordInput from "../../PasswordInput";
import PhoneInput from "../../PhoneInput";

function Form({ formId }) {
  return (
    <form
      id={formId}
      method="post"
      className="row g-3 mt-2 col-12 col-md-6 mx-auto"
    >
      <NameInput />

      <PhoneInput />

      <EmailInput />

      <PasswordInput extendedLabel={true} />

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
