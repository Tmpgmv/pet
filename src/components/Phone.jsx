import React from 'react';

function prepareAttributeValue(phone){
  // Убрать пробелы, дефисы, скобки.
  let tmp = phone.replace(/[\-\(\)\s]/g, "");
  return tmp;
}


function Phone({phone}) {    
  
  let attributeValue = prepareAttributeValue(phone);

  return <a href={`tel:${attributeValue}}`}>{phone}</a>;

}

export default Phone;