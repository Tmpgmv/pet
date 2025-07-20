import Footer from "../../Footer";
import Header from "../../Header";
import Main from "./Main";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function Index(props) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.toast) {
      toast.success(location.state.toast, {
        toastId: "user-registration-success",
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
