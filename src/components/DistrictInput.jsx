import React from "react";

function DistrictInput({ required = true, selectClassName = undefined }) {
  return (
    <>
      <label htmlFor="district">Район:</label>
      <select
        className={selectClassName ? selectClassName : undefined}
        id="district"
        defaultValue=""
        required={required}
      >
        <option value="">---</option>
        <option>Адмиралтейский</option>
        <option>Василеостровский</option>
        <option>Выборгский</option>
        <option>Калининский</option>
        <option>Кировский</option>
        <option>Колпинский</option>
        <option>Красногвардейский</option>
        <option>Красносельский</option>
        <option>Кронштадтский</option>
        <option>Курортный</option>
        <option>Московский</option>
        <option>Невский</option>
        <option>Петроградский</option>
        <option>Петродворцовый</option>
        <option>Приморский</option>
        <option>Пушкинский</option>
        <option>Фрунзенский</option>
        <option>Центральный</option>
      </select>
    </>
  );
}

export default DistrictInput;
