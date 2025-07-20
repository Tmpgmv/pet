function Alert({ message, success=true, dNone=false }) {
  return (
    <div className={`alert alert-${success ? "success" : "danger"}${dNone ? " d-none" : ""}`} role="alert">
      {message}
    </div>
  );
}

export default Alert;
