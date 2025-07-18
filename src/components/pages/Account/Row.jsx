import React from "react";
import Email from "../../Email";

function Row({ caption, value, isEmail = false }) {
  return (
    <div className="row">
      <div className="col fw-bold">{caption}</div>
      <div className="col">{isEmail ? <Email email={value} /> : value}</div>
    </div>
  );
}

export default Row;
