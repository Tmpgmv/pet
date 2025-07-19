import { Link } from "react-router-dom";
import Button from "../../Button";
import EmailInput from "../../EmailInput";
import PasswordInput from "../../PasswordInput";

function Form(props) {
  return (
    <form
      id="login-form"
      method="post"
      className="col-12 col-md-6 mx-auto mt-4"
    >
      <EmailInput />
      <PasswordInput />

      <div className="d-flex align-items-center mt-3">
        <Button btnText="Войти" />

        <Link to="/register" className="ms-5 text-primary">
          Регистрация
        </Link>
      </div>
    </form>
  );
}

export default Form;
