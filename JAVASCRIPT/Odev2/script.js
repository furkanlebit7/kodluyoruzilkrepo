const ulDom = document.querySelector("#list");
const input = document.querySelector("#task");
const ekleBtn = document.querySelector("#liveToastBtn");
const closeBtn = document.querySelector("#removeItemBtn");

/* LocalStorage da daha önce kayıtlı liste varsa onu alıyor yoksa boş
liste oluşturuyor */
let list = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : [];

/* LocalStorage den gelen elemanları li ler halinde listeye ekliyor */
list.forEach((element) => {
  let itemElementLi = document.createElement("li");
  itemElementLi.classList.add("list-item");
  itemElementLi.addEventListener("click", missionCompleted);
  itemElementLi.innerHTML = `${element}<span onclick="removeItemFromList(event)" class="close">&times;</span>
  `;
  ulDom.append(itemElementLi);
});

/* Listeye Eleman ekliyor */
function addItemToList(item) {
  let task = capitalFirst(item);
  let itemElementLi = document.createElement("li");
  itemElementLi.addEventListener("click", missionCompleted);
  itemElementLi.innerHTML = `${task}<span onclick="removeItemFromList(event)" id="removeItemBtn" class="close">&times;</span>
  `;
  ulDom.append(itemElementLi);
  list.push(task);
  saveToLocalStorage(list);
  showToast("Başarılı bir şekilde eklendi 🟢");
}

/* Listeden eleman siliyor */
function removeItemFromList(e) {
  list = list.filter((x) => x !== e.target.previousSibling.textContent);
  e.target.parentElement.remove();
  saveToLocalStorage(list);
  showToast("Başarılı bir şekilde silindi 🟢");
}

/* Girilen elemanın dolu mu boş mu veya daha önce eklenip eklenmediğini kontrol ediyor her şey okeyse liste ekleme foksiyonuna atama yapıyor */
function checkItems(e) {
  if (input.value == "") {
    showToast("Boş değer giremezsiniz ⛔");
  } else if (isItemsSame(input.value)) {
    showToast("Aynı değerleri giremezsiniz ⛔");
  } else {
    addItemToList(input.value);
  }
}

/* Tamamlanmış olan elemana checked classını tanımlıyor */
function missionCompleted(event) {
  event.target.classList.toggle("checked");
  console.log(event.target.classList);
}

/* Toastları ve mesajları gösteriyor */
function showToast(message) {
  let option = {
    animation: true,
    delay: 3000,
  };
  document.querySelector(".toast-body").innerHTML = message;
  const toast = document.querySelector("#liveToast");
  const toastElement = new bootstrap.Toast(toast, option);
  toastElement.show();
}

/* Elemanın daha önce eklenip eklenmediğini kontrol ediyor */
function isItemsSame(item) {
  let ok = list.filter((x) => x == item);
  if (ok.length == 0) {
    return 0;
  } else {
    return 1;
  }
}

/* Gereksiz fonksiyon şimdilik maksat elemanların hepsini büyük harfle başlatıp nokta ile bitirmekti  */
function capitalFirst(item) {
  // let upperCase = item[0].toUpperCase() + item.slice(1, item.length) + ".";
  return item;
}

/* verilen listeyi local storage a ekliyor */
function saveToLocalStorage(list) {
  localStorage.setItem("list", JSON.stringify(list));
}
