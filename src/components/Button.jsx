import React from "react";

function Button({btnText, aClassName=null}) {
  return (
    <button type="button" className={`btn btn-primary ${aClassName ? " " + aClassName : ""}`}>
      {btnText}
    </button>
  );
}

export default Button;
