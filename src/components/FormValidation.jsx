import $ from "jquery";
import {DEBUG} from "../general/constants";

function clearValidationErrors($input) {
  // Очистка сообщения об ошибке для конкретного
  // поля ввода. При этом сообщения об ошибках для 
  // остальных полей не заторнуты.
  
  $input.removeClass("is-valid is-invalid");
}

function validatePasswordConfirmation($input) {  
  let password = $("#password").val();
  let passwordConfirmation = $input.val();

  if (passwordConfirmation !== password) {
    $input.addClass("is-invalid");
  } else {
    $input.addClass("is-valid");
  }
}


function validateFileInput($input) {
  const files = $input[0].files;

  // Если файла нет, то проверим,
  // требуется ли он. Если он не требуется,
  // дальнейшие проверки не нужны.
  if (files.length === 0) {    
    if ($input.prop("required")) {
      $input.addClass("is-invalid");
    }
    return;
  }


  // Разрешены только файлы .png.  
  const file = files[0];
  const validTypes = ["image/png"];

  if (!validTypes.includes(file.type)) {
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

  if ($input.attr("type") === "file") {
    validateFileInput($input);    
  }

  if ($input[0].checkValidity()) {
    $input.addClass("is-valid");
  } else {
    $input.addClass("is-invalid");
  }
}

function attachBlurEventHandler(formId) {
  // Очень важно обработчик события прикрепить на форму.
  // Т.е. не на поле, а на его родителя.
  // Потому что мы сами писали, что события прикрепляем
  // в момент, когда докмент отрендерится см. function FormValidation({ formId }).
  // Но поля потом могут добавляться динамически.
  // В нашем случае это будут поля для
  // Вввода пароля и подтверждения пароля.
  // Если же применить наш прием,
  // то у родителя появляется обработчик событий,
  // и при этом уже для данной функции упомянуты 
  // селекотры (в документации .on( events [, selector ] [, data ], handler )).


  const $form = $("#" + formId);
  $form.on("blur", "input, select, textarea", function () {
    validateField($(this));
  });
}

function attachInvalidEventHandler(formId) {
  // См. комментарий к attachBlurEventHandler.

  const $form = $("#" + formId);
  $form.on("invalid", "input, select, textarea", function () {
    $(this).addClass("is-invalid");
  });
}

function attachEventHandlers(formId) {
  attachBlurEventHandler(formId);
}

function FormValidation({ formId }) {
  
  if (DEBUG) {
    return;
  }

  $(document).ready(function () {    
    attachEventHandlers(formId);
    attachInvalidEventHandler(formId);
  });
}

export default FormValidation;

export function clear() {
  // Очистка всех сообщений об ошибках. Т.е. на клиенте перед отправкой
  // выполнены все возможные проверки. Теперь форму очищаем от сообщений об ошибках.
  // Форма отправляется на сервер. Но сервер тоже может вернуть ошибки.
  // И показывать их надо на форме, очищенной от предыдущих сообщений.

  $(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
}
