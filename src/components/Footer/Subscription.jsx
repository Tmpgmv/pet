import React from "react";
import Button from "../Button";
import EmailInput from "../EmailInput";


function Subscription() {
  return (
    <div className="col-12 col-md">
      <h5>Новости</h5>
      <ul className="list-unstyled text-small">
        <li className="mb-1">
          <form id="subscription" method="post">
            <EmailInput />
            <Button btnText="Подписаться" aClassName="mt-3" />
          </form>
        </li>
      </ul>
    </div>
  );
}

export default Subscription;
