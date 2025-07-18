import AlertSuccess from "../../AlertSuccess";
import Adverts from "./Adverts";
import ChangeEmail from "./ChangeEmail";
import ChangePhone from "./ChangePhone";
import Info from "./Info";

function Main() {
  return (
    <main>
      <AlertSuccess message="Изменения сохранены" />
      <Info />
      <ChangePhone />
      <ChangeEmail />
      <Adverts />
    </main>
  );
}

export default Main;
