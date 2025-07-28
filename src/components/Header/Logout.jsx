import { LOGIN } from "../../general/constants";
import FormSingleAction from "../FormSingleAction";
import { useLocation, useNavigate } from "react-router-dom";

const FORM_ID = "logout";


function Logout() {

    const navigate = useNavigate();
    const location = useLocation();

    function redirect() {
      navigate(LOGIN, {
        state: {
          toast: {
            type: "success",
            message: "Вы вышли.",
          },
          from: location,
        },
      });
    }

    function handleSubmit(event) {        
        event.preventDefault();
        localStorage.clear();
        redirect();
    }

    return (
        <FormSingleAction id={FORM_ID} formClassName="py-2 d-flex link-body-emphasis text-decoration-none" onSubmit={handleSubmit} inputClassName="my-auto ps-3 pe-3 allUnset" />
    );
}

export default Logout;