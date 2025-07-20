import Footer from "../../Footer/Footer";
import Header from "../../Header";
import Main from "./Main";
import { toast } from 'react-toastify';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Index() {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.toast) {
      toast.success(location.state.toast, {
        toastId: "user-login-success",
      });
    }
  }, [location.state]);

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Index;
