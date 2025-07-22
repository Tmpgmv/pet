import FormSingleAction from "../FormSingleAction";
import { useNavigate } from "react-router-dom";

const FORM_ID = "logout";

function clearToken() {
    localStorage.removeItem("token");
}

function Logout() {

    const navigate = useNavigate();

    function redirect() {
        navigate("/login", {
            state: { toast: "Вы вышли из личного кабинета." }
        });
    }

    function handleSubmit(event) {        
        event.preventDefault();
        clearToken();
        redirect();
    }

    return (
        <FormSingleAction id={FORM_ID} formClassName="py-2 d-flex link-body-emphasis text-decoration-none" onSubmit={handleSubmit} inputClassName="my-auto ps-3 pe-3 allUnset" />
    );
}

export default Logout;