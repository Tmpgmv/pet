import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Main from "./Main";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function Index() {
  const location = useLocation();

  useEffect(() => {
    const toastData = location.state?.toast;
    if (toastData && toastData.message && toastData.type) {
      toast[toastData.type](toastData.message, {
        toastId: "login",
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
