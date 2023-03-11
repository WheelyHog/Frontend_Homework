const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const sectionProd = document.querySelector("#products");


let products = [];
titleInput.setAttribute("required", "true");
priceInput.setAttribute("required", "true");

let form = document.querySelector("#form");
form.onsubmit = (e) => {
  e.preventDefault();

  products.push(
    {
      title: titleInput.value,
      price: priceInput.value,
    });

  newProducts();
  // createNode(titleInput.value, priceInput.value);

  titleInput.value = "";
  priceInput.value = "";
}

function createNode(title, price) {
  let div = document.createElement("div");
  div.classList.add("products");

  let pTitle = document.createElement("p");
  let pPrice = document.createElement("p");

  pTitle.innerText = title;
  pPrice.innerText = price;

  div.append(pTitle, pPrice);
  sectionProd.appendChild(div);

  div.ondblclick = (event) => {
    alert(event.target.innerText);
  }
}

function newProducts() {
  sectionProd.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    createNode(products[i].title, products[i].price);
  }
}

let calc_btn = document.querySelector(".calc_btn");
calc_btn.onclick = (event) => {
  event.preventDefault();
  let sum = 0;
  for (const prooduct of products) {
    sum += +prooduct.price;
  }
  alert("Total price of products = " + sum);
}

// 2 ------------------------------------------------------------------------------
// Создайте input для ввода пароля. Рядом с input-ом добавьте так же кнопку. При первом клике на кнопку текст должен скрыться, а при повторном нажатии должен появиться обратно.
let sectionPassword = document.querySelector("#password");

let wrapper = document.createElement("div");
wrapper.setAttribute("id", "password_container");

let passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "text");
passwordInput.style.cssText = "width: 80%; height: 35px; margin-bottom: 10px; outline: none; border-radius: 5px; padding: 5px;"

let show_pswd_btn = document.createElement("button");
show_pswd_btn.innerText = "Hide Password";
show_pswd_btn.style.cssText = "background-color: rgba(125, 171, 125, 0.693); border: 1px solid #fff; height: 35px; color: #fff; cursor: pointer; margin-bottom: 10px; border-radius: 5px; width: 20%;"

wrapper.append(passwordInput, show_pswd_btn);
sectionPassword.append(wrapper);
document.body.append(sectionPassword);

show_pswd_btn.addEventListener("click", (e) => {
  e.target.innerText = e.target.innerText == "Hide Password" ? "Show Password" : "Hide Password";
  passwordInput.getAttribute("type") == "text" ? passwordInput.setAttribute("type", "password") : passwordInput.setAttribute("type", "text");
 })