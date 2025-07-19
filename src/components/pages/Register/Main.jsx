import H1 from "../../H1";
import Form from "./Form";

function Main({formId}) {
  return (
    <main>
      <section id="login-section" className="mt-5">
        <H1 h1="Регистрация" />
        <Form formId={formId}/>
      </section>
    </main>
  );
}

export default Main;
