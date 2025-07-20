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
  $("#" + formId + " input").on("blur", function () {
    validateField($(this));
  });
}

function validateForm(formId) {
  $(document).ready(function () {
    attachBlurEventHandler(formId);
  });
}

function FormValidation({ formId }) {
  validateForm(formId);
  return <></>;
}

export default FormValidation;
