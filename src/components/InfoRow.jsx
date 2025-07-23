import Email from "./Email";
import Phone from "./Phone";

function prepareValue(value, isPhone, isEmail){
  let toBeDisplayed = ""; 

  if (isEmail){     
    toBeDisplayed = <Email email={value} />; 
  } else if (isPhone) {   

    toBeDisplayed = <Phone phone={value} />; 
  } else {
    toBeDisplayed = value;
  }

  return toBeDisplayed;
}

function InfoRow({ id, caption, value, isPhone = false, isEmail = false }) {

  let toBeDisplayed = prepareValue(value, isPhone, isEmail)


  return (
    <div className="row">
      <div className="col fw-bold">{caption}</div>
      <div id={id} className="col">
        {toBeDisplayed}
      </div>
    </div>
  );
}

export default InfoRow;
