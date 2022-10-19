let myName = prompt("Lütfen isminizi giriniz");
document.querySelector("#myName").innerHTML = myName;

function showTime() {
  const myClock = document.querySelector("#myClock");
  const myDate = document.querySelector("#myDate");
  const date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hour = date.getHours();
  let day = date.getDate();
  let dayName = date.getDay();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  switch (dayName) {
    case 1:
      dayName = "Pazartesi";
      break;
    case 2:
      dayName = "Salı";
      break;
    case 3:
      dayName = "Çarşamba";
      break;
    case 4:
      dayName = "Perşembe";
      break;
    case 5:
      dayName = "Cuma";
      break;
    case 6:
      dayName = "Cumartesi";
      break;
    case 7:
      dayName = "Pazar";
      break;
  }

  switch (month) {
    case 0:
      month = "Ocak";
      break;
    case 1:
      month = "Şubat";
      break;
    case 2:
      month = "Mart";
      break;
    case 3:
      v = "Nisan";
      break;
    case 4:
      month = "Mayıs";
      break;
    case 0:
      month = "Haziran";
      break;
    case 0:
      month = "Temmuz";
      break;
    case 0:
      month = "Ağustos";
      break;
    case 0:
      month = "Eylül";
      break;
    case 0:
      month = "Ekim";
      break;
    case 0:
      month = "Kasım";
      break;
    case 0:
      month = "Aralık";
      break;
  }

  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  hour = hour < 10 ? "0" + hour : hour;

  myClock.innerHTML = hour + ":" + min + ":" + sec;
  myDate.innerHTML =
    day + "/" + month + "/" + year + " " + "<u>" + dayName + "</u>";

  setTimeout(showTime, 1000);
}

showTime();
