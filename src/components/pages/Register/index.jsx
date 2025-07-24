import Alert from "../../Alert";
import Footer from "../../Footer/Footer";
import FormValidation from "../../FormValidation";
import Header from "../../Header/Header";
import Main from "./Main";

function index() {
  const FORM_ID = "registration-form";

  return (
    <div>
      <Header />
      <Main formId={FORM_ID} />
      <Footer />
      <FormValidation formId={FORM_ID} />
    </div>
  );
}

export default index;
