import React from "react";
import $ from "jquery";

export function showSpinner() {
  $("#spinner").removeClass("d-none");

  // Выключить кнопки на период ожидания.
  $("form button").prop("disabled", true);

  // Показать спиннер на время, затем скрыть.
  return new Promise((resolve) => {
    setTimeout(() => {
      $("#spinner").addClass("d-none");
      $("form button").prop("disabled", false);
      resolve(); // This tells the caller that the spinner is now hidden
    }, 1000);
  });
}

function Spinner({aClassName=null}) {
  return (
    <div id="spinner" className={`spinner-grow d-flex text-success mx-auto ${aClassName ? aClassName : ""}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Spinner;
