function capitalizeFirstLetter(str) {
  if (str.length === 0) {
    return ""; // Обработка пустой строки.
  }

  let result = str.charAt(0).toUpperCase() + str.slice(1);

  return result;
}

export default capitalizeFirstLetter;