let div_root = document.querySelector('#root')
let currentId = 1;

function fetchProduct(id) {
  let url = `https://dummyjson.com/products/${id}`
  fetch(url)
    .then(res => res.json())
    .then(data => render(data))
}

fetchProduct(currentId)

function render({ id, images, title, price, rating }) {

  div_root.innerHTML = ''

  let product_container = document.createElement('div')
  product_container.className = 'card'

  let btn_container = document.createElement('div')
  btn_container.className = 'btn_container'

  let prev_btn = document.createElement('button')
  prev_btn.innerHTML = '<i class="las la-arrow-circle-left"></i>'
  prev_btn.className = 'btn'
  prev_btn.onclick = () => {
    currentId--;
    if (currentId < 1) {
      currentId = 1
      alert("no more products!")
    }
    console.log(currentId);
    fetchProduct(currentId)
  }

  let id_indiicator = document.createElement('p')
  id_indiicator.innerText = `ID: ${id}`
  id_indiicator.className = 'id_indicator'

  let next_btn = document.createElement('button')
  next_btn.innerHTML = '<i class="las la-arrow-circle-right"></i>'
  next_btn.className = 'btn'
  next_btn.onclick = () => {
    currentId++;
    if (currentId > 30) {
      currentId = 30
      alert("no more products!")
    }
    console.log(currentId);
    fetchProduct(currentId)
  }

  btn_container.append(prev_btn, id_indiicator, next_btn)

  let product_image = document.createElement('img')
  product_image.src = images[0]
  product_image.className = 'card_img'

  let product_title = document.createElement('h2')
  product_title.innerText = `Title: ${title}`
  product_title.className = 'card_title'

  let product_price = document.createElement('h4')
  product_price.innerText = `Price: ${price} $`

  let stars = document.createElement('div')
  stars.innerHTML = setRating(rating)
  stars.className = 'rating'

  product_container.append(btn_container, product_image, product_title, product_price, stars)
  div_root.append(product_container)
}

function setRating(rating) {

  let ratingStatus = Math.round(rating)
  let stars_string = ''
  for (let i = 0; i < 5; i++) {
    if (i < ratingStatus) {
      stars_string += '<i class="las la-star active"></i>'
    } else stars_string += '<i class="las la-star"></i>'
  }
  return stars_string
}

