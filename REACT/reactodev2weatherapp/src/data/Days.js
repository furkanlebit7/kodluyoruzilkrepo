const getDayName = (day) => {
  if (day % 7 === 0) {
    return "Pazartesi";
  } else if (day % 7 === 1) {
    return "Salı";
  } else if (day % 7 === 2) {
    return "Çarşamba";
  } else if (day % 7 === 3) {
    return "Perşembe";
  } else if (day % 7 === 4) {
    return "Cuma";
  } else if (day % 7 === 5) {
    return "Cumartesi";
  } else if (day % 7 === 6) {
    return "Pazar";
  }
};

export default getDayName;
