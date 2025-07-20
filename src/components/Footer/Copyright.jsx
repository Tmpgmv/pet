import React from 'react';
import cat from "../../assets/images/cat.svg";

function Copyright(props) {
    return (
        <div className="col-12 col-md">          
          <img src={cat} height={19} alt="cat" />
          <small className="d-block mb-3 text-body-secondary">
            © 2017–2025 GET PET BACK
          </small>
        </div>
    );
}

export default Copyright;