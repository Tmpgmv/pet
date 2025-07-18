import React from "react";
import H1 from "../../H1";
import Form from "./Form";

function Main(props) {
  return (
    <main>
      <section id="login-section" className="mt-5">
        <H1 h1="Регистрация" />
        <Form />
      </section>
    </main>
  );
}

export default Main;
