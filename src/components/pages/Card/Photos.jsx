import React from "react";
import Img from "../../Img";
import { SERVER_URL } from "../../../general/constants";

function Photos({cardInfo}) {  
  debugger;
  return (
    <section id="photos">
        <Img src={SERVER_URL + cardInfo.photo0} aClassName="rounded img-fluid mx-auto mt-5 mb-5 d-block" alt={cardInfo.kind} />
        
        {cardInfo.photo1 ? <Img src={SERVER_URL + cardInfo.photo1} aClassName="rounded img-fluid mx-auto mt-5 mb-5 d-block" alt={cardInfo.kind} /> : undefined}
        
        
        {cardInfo.photo2 ? <Img src={SERVER_URL + cardInfo.photo2} aClassName="rounded img-fluid mx-auto mt-5 mb-5 d-block" alt={cardInfo.kind} /> : undefined}
    </section>
  );
}

export default Photos;
