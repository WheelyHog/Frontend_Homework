const banner = [
  {
    id: 1,
    title: 'Бухгалтерские услуги в вашем городе',
    button_text: 'Наша презентация',
    button_action: '',
    slider_src: './images/banner1.png'
  },
  {
    id: 2,
    title: 'Дегустация лучших сортов пива',
    button_text: 'Вызов специалиста',
    button_action: '',
    slider_src: './images/banner1.png'
  },
  {
    id: 3,
    title: 'Покормить кота в вашем городе',
    button_text: 'Позвать на помощь',
    button_action: '',
    slider_src: './images/banner1.png'
  },
  {
    id: 4,
    title: 'Организация похода в горы',
    button_text: 'Принять участие',
    button_action: '',
    slider_src: './images/banner1.png'
  },
]
let currentWidth = 1920
let bannerSlider = document.querySelector('.banner_slider')

// let banner_frame = document.querySelector('.banner_frame')
let banner_title = document.querySelector('.banner_title')
let banner_btn = document.querySelector('.presentation_btn')

let right_btn = document.querySelector('.arrow_right')
let left_btn = document.querySelector('.arrow_left')
let dotList = document.querySelectorAll('.banner_dot')

function changeSlide(sliderCount = 0, bannerSlider, right_btn, left_btn, dotList, slideWidth, class_name) {
  right_btn.addEventListener('click', () => {
    // slideWidth = document.querySelector('.container').clientWidth;
    sliderCount++;
    if (sliderCount == banner.length) {
      bannerSlider.style.transform = `translateX(0px)`
      sliderCount = 0;
    } else bannerSlider.style.transform = `translateX(${sliderCount * -slideWidth}px)`
    setDot(sliderCount)
  })

  left_btn.addEventListener('click', () => {
    // slideWidth = document.querySelector('.container').clientWidth;
    if (sliderCount != 0) {
      sliderCount--;
      bannerSlider.style.transform = `translateX(${sliderCount * -slideWidth}px)`
    } else {
      sliderCount = banner.length - 1;
      bannerSlider.style.transform = `translateX(${sliderCount * -slideWidth}px)`
    }
    setDot(sliderCount)
  })



  function setDot(sliderCount) {
    for (let i = 0; i < banner.length; i++) {
      if (i == sliderCount) {
        dotList[i].classList.add(class_name)
        banner_title.innerHTML = banner[i].title
        banner_btn.innerHTML = banner[i].button_text
      } else {
        dotList[i].classList.remove(class_name)
      }
    }
  }

  function getDot() {
    for (let i = 0; i < banner.length; i++) {
      dotList[i].onclick = () => {
        setDot(i);
        sliderCount = i;
        bannerSlider.style.transform = `translateX(${i * -slideWidth}px)`
      }
    }
  }

  getDot()
}

changeSlide(sliderCount = 0, bannerSlider, right_btn, left_btn, dotList, currentWidth, 'dot_active') // top_banner

// ----------------------------clients_slider-------------------------

let clientSlider = document.querySelector('.clients_frame')
let r_btn = document.querySelector('.div_arrow_right')
let l_btn = document.querySelector('.div_arrow_left')
let clients_dot_list = document.querySelectorAll('.client_dot')

changeSlide(sliderCount = 0, clientSlider, r_btn, l_btn, clients_dot_list, 1110, 'client_dot_active') // clients_slider

// -----------------------------feddback_slider-----------------------------
let feedbackSlider = document.querySelector('.feedback_frame')
let feedback_right_btn = document.querySelector('.f_arrow_right')
let feedback_left_btn = document.querySelector('.f_arrow_left')
let feedback_dot_list = document.querySelectorAll('.feedback_dot')


changeSlide(sliderCount = 0, feedbackSlider, feedback_right_btn, feedback_left_btn, feedback_dot_list, 1110, 'feedback_dot_active')

// --------------------------------mobile_menu-----------------------
let parent_div = document.querySelector('.top_banner')

let menu_elems = []
let menu_links = []

let menu_list = document.querySelectorAll('.menu_item a')

for (let i = 0; i < menu_list.length; i++) {
  menu_elems.push(menu_list[i].innerText)
  menu_links.push(menu_list[i].href)
}

function open_menu() {

  let modal_div = document.createElement('div')
  modal_div.className = 'modal'

  let mobile_menu = document.createElement('ul')
  mobile_menu.className = 'mobile_menu'

  for (let i = 0; i < menu_list.length; i++) {
    let mobile_menu_item = document.createElement('li')
    mobile_menu_item.className = 'mobile_menu_item'
    mobile_menu_item.innerHTML = `<a href=${menu_links[i]} class="mobile_link">${menu_elems[i]}</a>`
    mobile_menu.append(mobile_menu_item)
  }
  modal_div.append(mobile_menu)
  parent_div.append(modal_div)
}

function close_menu() {
  let modal_div = document.querySelector('.modal')
  modal_div.remove()
}

// ---------------------------lines------------------------

let setModal = false;

let menu_btn = document.querySelector('.menu_btn')
let lines = document.querySelectorAll('.line')

menu_btn.addEventListener('click', () => {
  if (!setModal) {
    lines[0].style.rotate = '45deg'
    lines[0].style.transform = 'translate(5px, 7px)'

    lines[1].style.display = 'none'

    lines[2].style.rotate = '-45deg'
    lines[2].style.transform = 'translate(-2px, -1px)'

    setModal = true
    open_menu()

  } else {
    lines[0].style.rotate = '0deg'
    lines[0].style.transform = 'translate(0px, 0px)'

    lines[1].style.display = 'block'

    lines[2].style.rotate = '0deg'
    lines[2].style.transform = 'translate(0px, 0px)'

    setModal = false
    close_menu();
  }


})