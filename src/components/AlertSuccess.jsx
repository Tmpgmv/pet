import React from "react";

function AlertSuccess({ message }) {
  return (
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  );
}

export default AlertSuccess;
