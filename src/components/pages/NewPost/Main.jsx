import Button from "../../Button";
import CheckboxInput from "../../CheckboxInput";
import EmailInput from "../../EmailInput";
import KindInput from "../../KindInput";
import NameInput from "../../NameInput";
import PasswordConfirmationInput from "../../PasswordConfirmationInput";
import PasswordInput from "../../PasswordInput";
import PhoneInput from "../../PhoneInput";
import DescriptionInput from "./DescriptionInput";
import ImageInput from "./ImageInput";
import MarkInput from "./MarkInput";

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

        <ImageInput aLabel={true} />

        <ImageInput />

        <ImageInput />

        <CheckboxInput
          name="confirm"
          label="Согласие на обработку персональных данных"
          errorMessage="Необходимо согласиться."
          isRequired={true}
        />

        <CheckboxInput
          name="register"
          label="Пройти автоматическую регистрацию"
          errorMessage="Проблема на сервере."
        />

        <div id="passwords">
          <PasswordInput />

          <PasswordConfirmationInput />
        </div>

        <div className="col">
          <Button btnText="Опубликовать" />
        </div>
      </form>
    </section>
  );
}

export default Main;
