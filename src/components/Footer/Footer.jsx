import Copyright from "./Copyright";


import Subscription from "./Subscription";

function Footer() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <Copyright />
        <Subscription />
      </div>
    </footer>
  );
}

export default Footer;
