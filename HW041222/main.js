let specs = [
  {
    model: "Victory Vision Tour",
    dimension: "Length: 2702 mm / 106.4 in.",
    wheelbase: "1670 mm / 65.7 in.",
    clearance: "148 mm / 5.8 in.",
    transmission: "6 Speed",
    tank: "22.7L / 6 US gal",
    price: "$ 35 000",
  },
  {
    model: "Honda VTX 1800",
    dimension: "Length: 2702 mm / 106.4 in.",
    wheelbase: "1717 mm / 67.6 in",
    clearance: "152mm / 5.7 in",
    transmission: "5 Speed",
    tank: "15.5 Litres / 4.3 US gal",
    price: "$ 37 000",
  },
  {
    model: "HD 1200C Sportster Custom",
    dimension: "Length  2225 mm / 87.6 in",
    wheelbase: "1670 mm / 65.7 in.",
    clearance: "107 mm / 4.2 in",
    transmission: "5 Speed",
    tank: "17 Litres / 4.5 US gal",
    price: "$ 25 000",
  },
  {
    model: "FLHXXX Street Glide Trike",
    dimension: "Length 2687.3 mm / 105.8 in",
    wheelbase: "2670 mm / 95.7 in.",
    clearance: "148 mm / 5.8 in.",
    transmission: "6 Speed",
    tank: "22.7L / 6 US gal",
    price: "$ 80 000",
  }
]


let currentSlide = 1;
let offset = 0;
const sliderLine = document.querySelector(".slider-line");
const nextBtn = document.querySelector(".slider-next");
const prevBtn = document.querySelector(".slider-prev");


nextBtn.onclick = () => {
  offset += 1000;
  currentSlide++;
  console.log(currentSlide);
  
  if (offset > 3500) {
    offset = 0;
    currentSlide = 1;
    console.log(currentSlide);
    changeDescription(currentSlide);
  }
  sliderLine.style.left = -offset + "px";
  changeDescription(currentSlide);
  console.log(currentSlide);
};

prevBtn.onclick = () => {
  offset -= 1000;
  currentSlide--;
  
  if (offset < 0) {
    offset = 3000;
    currentSlide = 4;
    changeDescription(currentSlide);
    console.log(currentSlide);
  }
  sliderLine.style.left = -offset + "px";
  changeDescription(currentSlide);
  console.log(currentSlide);
};

function changeDescription(currentSlide){
  const tabModel = document.querySelector("#model");
  const tabDimension = document.querySelector("#dimension");
  const tabWheelbase = document.querySelector("#wheelbase");
  const tabClearance = document.querySelector("#clearance");
  const tabTransmission = document.querySelector("#transmission");
  const tabTank = document.querySelector("#tank");
  const tabPrice = document.querySelector("#price");

  tabModel.innerHTML = specs[currentSlide - 1].model;
  tabDimension.innerHTML = specs[currentSlide - 1].dimension;
  tabWheelbase.innerHTML = specs[currentSlide - 1].wheelbase;
  tabClearance.innerHTML = specs[currentSlide - 1].clearance;
  tabTransmission.innerHTML = specs[currentSlide - 1].transmission;
  tabTank.innerHTML = specs[currentSlide - 1].tank;
  tabPrice.innerHTML = specs[currentSlide - 1].price;
}