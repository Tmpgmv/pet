import React from "react";
import H2 from "../../H2";
import EmailInput from "../../EmailInput";
import Button from "../../Button";

function ChangeEmail() {
  return (
    <section id="change-email" className="mt-5">
      <H2 h2="Изменить email" />

      <form
        id="change-email-form"
        className="mx-auto col col-md-8 mt-4"
        method="post"
      >

        <EmailInput />

        <div className="col">
          <Button btnText="Сохранить" aClassName="mt-3"/>
        </div>
      </form>
    </section>
  );
}

export default ChangeEmail;
