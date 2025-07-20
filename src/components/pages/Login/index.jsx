import Footer from "../../Footer";
import Header from "../../Header";
import Main from "./Main";
import Alert from "../../Alert";

function index(props) {
  return (
    <div>
      <Header />
      <Alert message="Пользователь создан." />
      <Main />
      <Footer />
    </div>
  );
}

export default index;
