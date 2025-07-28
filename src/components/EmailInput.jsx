import capitalizeFirstLetter from "../general/capitalizeFirstLetter";
// import { attr } from "../general/debugFunctions";
import { attr } from "../general/debugFunctions";

function EmailInput({ id = "email", defaultValue = "" }) {
  /* Для формы подписки на события обязательно задать id="subscription".
   * Для остальных случаев - пользоваться id по умолчанию.
   * Причина: надо избежать дублирования id. На странице с формой в <main> будет
   * поле для ввод электронной почты, и внизу на той же странице будет поле подписки.
   * И у них не должен совпасть Id поля ввода.
   */

  // Debug {
    var required = attr({prodValue: true, debugValue: false});
    var type = attr({prodValue: "email", debugValue: "text"});
  // } Debug

  //let capitalizedId = capitalizeFirstLetter(id);
  
  const ID = "email";

  return (
    <div>
      <label htmlFor={ID} className="form-label">
        Электронная почта
      </label>
      <input
        type={type} // В дебажном режиме проверим работу с ошибками. Иначе нативное поведение формы не даст этого сделать.
        className="form-control"
        id={ID}
        aria-describedby={`${ID}Error`}
        name={ID}
        required={required}
        defaultValue={defaultValue ? defaultValue : undefined}
      />
      <div id={`${ID}Error`} className="invalid-feedback">
        Введите корректный адрес электронной почты.
      </div>
    </div>
  );
}

export default EmailInput;
