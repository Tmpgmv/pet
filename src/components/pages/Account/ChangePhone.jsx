import Button from "../../Button";
import H2 from "../../H2";
import PhoneInput from "../../PhoneInput";

function ChangePhone() {
  return (
    <section id="change-phone" className="mt-5">
      <H2 h2="Изменить телефон" />

      <form
        id="change-phone-form"
        className="mx-auto col col-md-8 mt-4"
        method="post"
      >
        <PhoneInput />

        <div className="col">
          <Button btnText="Сохранить" aClassName="mt-3" />
        </div>
      </form>
    </section>
  );
}

export default ChangePhone;
