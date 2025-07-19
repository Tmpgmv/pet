import Footer from "../../Footer";
import Header from "../../Header";
import Main from "./Main";
import FormValidation from "../../FormValidation";

function index() {

  let formId = "registration-form";

  return (
    <div>
      <Header />
      <Main formId={formId}/>
      <Footer />
      <FormValidation formId={formId} />
    </div>
  );
}

export default index;
