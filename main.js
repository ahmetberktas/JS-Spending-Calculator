/* HTML'den gelenler */
const addBtn = document.getElementById("add-btn");
const titleInput = document.getElementById("title-inp");
const priceInput = document.getElementById("price-inp");
const list = document.getElementById("list");
const checkBox = document.querySelector("#checked");
const totalSpan = document.querySelector("#price-info");
const select = document.querySelector("select");
const userInput = document.querySelector("#user-inp");

/* Olay İzleyicileri */
addBtn.addEventListener("click", addExpense);
list.addEventListener("click", handleUpdate);
select.addEventListener("change", handleFilter);
userInput.addEventListener("change", saveUser);
document.addEventListener("DOMContentLoaded", getUser);

/* FONKSİYONLAR */

/* Toplam Fiyat Bilgisi */
let totalPrice = 0;
function updateTotal(price) {
  /* Js'de tutulan değişkeni güncelleme */
  totalPrice += price;

  /* Html'deki toplam alanını güncelleme */
  totalSpan.innerText = totalPrice;
}

/* Harcama Ekleme Fonksiyonu */
function addExpense(event) {
  /* Sayfayı yenilemeyi engelleme */
  event.preventDefault();

  /* İnputların değerlerine erişme */
  const title = titleInput.value;
  const price = priceInput.valueAsNumber;

  /* İnputlardan biri dahi boş ise alert verip fonksiyonu durdurma */
  if (!title || !price) {
    alert("Lütfen formu doldurunuz");
    return;
  }

  /* İnputlar doluysa kart oluşturup html'e gönderme */
  const expenseDiv = document.createElement("div");
  expenseDiv.classList.add("expense");

  if (checkBox.checked) {
    expenseDiv.classList.add("paid");
  }

  expenseDiv.innerHTML = `
          <h2 id="title">${title}</h2>
          <h2 id="price">${price}</h2>
          <div class="btns">
            <img id="update" src="/assets/images/cash.png" data-bs-toggle="tooltip" title="Öde" />
            <img id="delete" src="/assets/images/delete.png" data-bs-toggle="tooltip" title="Sil" />
          </div>
  `;
  list.appendChild(expenseDiv);

  /* Toplamı güncelleme */
  updateTotal(price);

  /* Ekleme İşleminden sonra İnputları temizleme */
  titleInput.value = "";
  priceInput.value = "";
  checkBox.checked = false;
}

/* Harcamayı Silme veya Güncelleme Fonksiyonu */
function handleUpdate(event) {
  const element = event.target;

  /* Click olunan butonun kapsayıcısına ulaşma */
  const parent = element.parentElement.parentElement;

  if (element.id === "delete") {
    /* Silinen elemanın fiyatına erişme */
    const price = Number(parent.children[1].innerText);
    /* Toplamı güncelleme */
    updateTotal(-price);
    /* Elemanı Html'den kaldırma */
    parent.remove();
  }

  if (element.id === "update") {
    parent.classList.toggle("paid");
  }
}

/* Filtreleme Fonksiyonu */
function handleFilter(event) {
  const selected = event.target.value;
  const items = list.childNodes;
  items.forEach((item) => {
    switch (selected) {
      case "all":
        item.style.display = "flex";
        break;
      case "paid":
        if (item.classList.contains("paid")) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
        break;
      case "not-paid":
        if (!item.classList.contains("paid")) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
        break;
    }
  });
}

/* Kullanıcıyı Local Storage Kaydetme Fonksiyonu */
function saveUser(event) {
  localStorage.setItem("username", event.target.value);
}

/* Kullanıcıyı Local Storage'den alma Fonksiyonu */
function getUser() {
  const username = localStorage.getItem("username") || "";
  userInput.value = username;
}
