// ДЗ:
// 1. При клике на кнопку выводится сообщение 'hello' в консоль
// 2. При клике на кнопку меняется цвет заднего фона у параграфа
// 3. При клике на кнопку цвет фона меняется на черный, а при следующем клике меняется на белый


//1
let btn_hello = document.querySelector(".btn_hello");
btn_hello.onclick = () => {
  console.log("hello");
}

//2 
let btn_p_bg = document.querySelector(".btn_p_bg");
btn_p_bg.onclick = () => {
  let p = document.querySelector(".paragraph");
  p.style.backgroundColor = "yellow";
}

//3 ----------1 variant ---------------
let flag = "off";
let btn_bg = document.querySelector(".btn_bg");

btn_bg.onclick = function() {
  switch (flag) {
    case "off": {
      flag = "on";
      document.body.style.backgroundColor = "black";
      console.log(flag);
      break;
    }
    default: {
      flag = "off";
      document.body.style.backgroundColor = "white";
      console.log(flag);
    }
  }
}

//3 ----------2 variant ---------------
let btn_bg = document.querySelector(".btn_bg");
btn_bg.onclick = () => {
  document.body.classList.toggle("black");
}