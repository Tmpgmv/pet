import $ from "jquery";

function clearValidationErrors($input) {
  $input.removeClass("is-valid is-invalid");
}

function validatePasswordConfirmation($input) {
  let password = $("#validationServerPassword").val();
  let password_confirmation = $input.val();

  if (password_confirmation !== password) {
    $input.addClass("is-invalid");
  } else {
    $input.addClass("is-valid");
  }
}

function validateField($input) {
  clearValidationErrors($input);

  if ($input.attr("name") === "password_confirmation") {
    validatePasswordConfirmation($input);
  }

  if ($input[0].checkValidity()) {
    $input.addClass("is-valid");
  } else {
    $input.addClass("is-invalid");
  }
}

function attachBlurEventHandler(formId) {
  $(
    "#" + formId + " input, #" + formId + " select, #" + formId + " textarea"
  ).on("blur", function () {    
    validateField($(this));
  });
}

function attachInvalidEventHandler(formId) {
  $(
    "#" + formId + " input, #" + formId + " select, #" + formId + " textarea"
  ).on("invalid", function (event) {
    $(this).addClass("is-invalid");
  });
}

function attachEventHandlers(formId) {
  attachBlurEventHandler(formId);
}

function FormValidation({ formId }) {
  $(document).ready(function () {
    attachEventHandlers(formId);
    attachInvalidEventHandler(formId);
  });
}

export default FormValidation;

export function clear() {
  // Очистка сообщений об ошибках. Т.е. на клиенте перед отправкой
  // выполнены все возможные проверки. Теперь форму очищаем от сообщений об ошибках.
  // Форма отправляется на сервер. Но сервер тоже может вернуть ошибки.
  // И показывать их надо на форме, очищенной от предыдущих сообщений.

  $(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
}
