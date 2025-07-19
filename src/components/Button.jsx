function Button({ btnText, aClassName = null }) {
  return (
    <button
      type="submit"
      className={`btn btn-primary ${aClassName ? " " + aClassName : ""}`}
    >
      {btnText}
    </button>
  );
}

export default Button;
