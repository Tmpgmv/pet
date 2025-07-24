import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Main from "./Main";
import FormValidation from "../../FormValidation";

const FORM_ID = "new-post-form";

function index(props) {
  return (
    <div>
      <Header />
      <Main formId={FORM_ID}/>
      <Footer />
      {/* <FormValidation formId={FORM_ID} /> */}
    </div>
  );
}

export default index;
