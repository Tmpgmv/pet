import React from "react";
import $ from "jquery";

export function showSpinner() {
  $("#spinner").removeClass("d-none");

  // Выключить кнопки на период ожидания.
  $("form button").prop("disabled", true);

  // Скрыть спиннер.
  setTimeout(() => {
    $("#spinner").addClass("d-none");
    $("form button").prop("disabled", false);
  }, 1000);
}

function Spinner({aClassName=null}) {
  return (
    <div id="spinner" className={`spinner-grow d-flex text-success mx-auto ${aClassName ? aClassName : ""}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Spinner;
