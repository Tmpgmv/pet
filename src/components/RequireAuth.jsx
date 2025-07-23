import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import getToken from "../general/getToken";
import { LOGIN } from "../general/constants";

function RequireAuth({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate(LOGIN, {
        state: {
          toast: {
            type: "error",
            message: "Выполните вход.",
          },
          from: location,
        },
      });
    }
  }, [navigate, location]);

  const token = getToken();

  return token ? children : null; // Не рендерить ничего, если пользователь не авторизован.
}

export default RequireAuth;
