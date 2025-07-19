import React from "react";

function CardAction({id}) {
  return (
    <form id={id} method="post">
      <input className={`${id} ps-3 pe-3`} type="submit" value="" />
    </form>
  );
}

export default CardAction;
