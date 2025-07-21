import Alert from "../../Alert";
import Footer from "../../Footer/Footer";
import FormValidation from "../../FormValidation";
import Header from "../../Header/Header";
import Main from "./Main";

function index() {
  let formId = "registration-form";

  return (
    <div>
      <Header />
      <Main formId={formId} />
      <Footer />
      <FormValidation formId={formId} />
    </div>
  );
}

export default index;
