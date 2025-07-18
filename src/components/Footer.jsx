import cat from "../assets/images/cat.svg";
import Button from "./Button";

function Footer() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          {" "}
          <img src={cat} height={19} alt="cat" />
          <small className="d-block mb-3 text-body-secondary">
            © 2017–2025 GET PET BACK
          </small>{" "}
        </div>
        <div className="col-12 col-md">
          <h5>Новости</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <form id="subscription" method="post">
                <input
                  type="email"
                  className="form-control is-invalid"
                  id="subscriptionEmail"
                  aria-describedby="emailFeedback"
                  required=""
                />
                <div id="emailFeedback" className="invalid-feedback">
                  Подписка уже оформлена.
                </div>
                <Button btnText="Подписаться" aClassName="mt-3" />
              </form>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
