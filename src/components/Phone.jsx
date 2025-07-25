import React from 'react';

function prepareAttributeValue(phone){
  // Убрать все кроме цифр и знака плюс. По спецификации
  // сервер ничего другого ответить не должен.
  // Но на всякий случай санируем данные сервера.
  
  let tmp = phone.replace(/[^\d+]/g, "");
  return tmp;
}


function Phone({phone}) {    
  
  let attributeValue = prepareAttributeValue(phone);

  return <a href={`tel:${attributeValue}}`}>{phone}</a>;

}

export default Phone;