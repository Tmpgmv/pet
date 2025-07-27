import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Main from "./Main";
import FormValidation from "../../FormValidation";

const FORM_ID = "edit-post-form";

function index() {
  return (
    <div>
      <Header />
      <Main formId={FORM_ID}/>
      <Footer />
      <FormValidation formId={FORM_ID} />
    </div>
  );
}

export default index;