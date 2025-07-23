import capitalizeFirstLetter from "../general/capitalizeFirstLetter";

function EmailInput({id="email"}) {
  /* Для формы подписки на события обязательно задать id="subscription".
  * Для остальных случаев - пользоваться id по умолчанию.
  * Причина: надо избежать дублирования id. На странице с формой в <main> будет
  * поле для ввод электронной почты, и внизу на той же странице будет поле подписки.
  * И у них не должен совпасть Id поля ввода.
  */

  let capitalizedId = capitalizeFirstLetter(id);
  let validationServerId = "validationServer" + capitalizedId;

  return (
    <div>
      <label htmlFor={validationServerId} className="form-label">
        Электронная почта
      </label>
      <input
        type="email"
        className="form-control"
        id={validationServerId}
        aria-describedby={`${id}Error`}
        name="email"
        required={true}
      />
      <div id={`${id}Error`} className="invalid-feedback">
        Введите корректный адрес электронной почты.
      </div>
    </div>
  );
}

export default EmailInput;
