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
        <option value="Адмиралтейский">Адмиралтейский</option>
        <option value="Василеостровский">Василеостровский</option>
        <option value="Выборгский">Выборгский</option>
        <option value="Калининский">Калининский</option>
        <option value="Кировский">Кировский</option>
        <option value="Колпинский">Колпинский</option>
        <option value="Красногвардейский">Красногвардейский</option>
        <option value="Красносельский">Красносельский</option>
        <option value="Кронштадтский">Кронштадтский</option>
        <option value="Курортный">Курортный</option>
        <option value="Московский">Московский</option>
        <option value="Невский">Невский</option>
        <option value="Петроградский">Петроградский</option>
        <option value="Петродворцовый">Петродворцовый</option>
        <option value="Приморский">Приморский</option>
        <option value="Пушкинский">Пушкинский</option>
        <option value="Фрунзенский">Фрунзенский</option>
        <option value="Центральный">Центральный</option>
      </select>

      <div className = "invalid-feedback">
        Выберите район, вид или и то, и другое.
      </div>
    </div>
  );
}

export default DistrictInput;
