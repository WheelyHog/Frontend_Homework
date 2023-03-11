const btnList = document.querySelectorAll(".slider-btn");
const slideImg = document.querySelector("#slider");

slideQuantity = 8;
let currentSlide = 1;

for (let i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener("click", function () {
    if (btnList[i].classList.contains("up") || btnList[i].classList.contains("right")) {
      currentSlide++;
      if (currentSlide > slideQuantity) {
        currentSlide = 1;     
      }
      slideImg.setAttribute("src", `images/${currentSlide}.jpg`);
    } else {
      currentSlide--;
      if (currentSlide < 1) {
        currentSlide = slideQuantity;
      }
      slideImg.setAttribute("src", `images/${currentSlide}.jpg`);
    }
  })
}