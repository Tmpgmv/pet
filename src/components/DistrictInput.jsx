import React from "react";

function DistrictInput({ required = true, selectClassName = null }) {
  return (
    <div>
      <label htmlFor="district" className="form-label" >Район:</label>
      <select
        className={`form-control ${selectClassName ? selectClassName : ""}`}
        id="district"
        defaultValue=""
        name="district"
        required={required}
        pattern={required ? "(?!(---))" : undefined}
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

    <div className = "invalid-feedback">
      Выберите район.
    </div>
    </div>
  );
}

export default DistrictInput;
