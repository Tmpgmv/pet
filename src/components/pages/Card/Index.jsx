import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Main from "./Main";
import { useParams } from "react-router-dom";

function Index() {

  const { cardId } = useParams();

  return (
    <>
      <Header />
      <Main cardId={cardId}/>
      <Footer />
    </>
  );
}

export default Index;
