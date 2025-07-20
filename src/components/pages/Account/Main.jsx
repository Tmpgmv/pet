import Alert from "../../Alert";
import Adverts from "./Adverts";
import ChangeEmail from "./ChangeEmail";
import ChangePhone from "./ChangePhone";
import Info from "./Info";

function Main() {
  return (
    <main>
      <Alert message="Изменения сохранены" />
      <Info />
      <ChangePhone />
      <ChangeEmail />
      <Adverts />
    </main>
  );
}

export default Main;
