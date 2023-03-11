let url = "https://dummyjson.com/products";

async function getProducts(url) {
  let resProducts = await fetch(url)
  if (resProducts.status == 404) {
    console.log("there is no products");
    return
  }
  let dataProducts = await resProducts.json()

  let products = [...dataProducts.products]
  console.log(products);
  render(products);
}

let root = document.querySelector('#root');
let modal = document.querySelector('.modal');

function render(products) {


  let currentProduct = 0;

  products.forEach(product => {
    let card = document.createElement('div');
    card.classList.add('card')

    let cardImg = document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.src = product.thumbnail;

    let cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = `Title: ${product.title}`;

    let cardDescription = document.createElement('p');
    cardDescription.innerHTML = `Description: ${product.description.slice(0, 51)}...`

    let readmoreLink = document.createElement('a');
    readmoreLink.innerText = 'Readmore';
    readmoreLink.classList.add('readmore');
    readmoreLink.addEventListener('click', () => {
      currentProduct = product.id;
      showModal(product)
    });

    let cardPrice = document.createElement('h3');
    cardPrice.classList.add('card-price');
    cardPrice.innerText = `Price: ${product.price}$`;

    let ratingDiv = document.createElement('div');
    ratingDiv.classList.add('stars')
    ratingDiv.innerHTML = setRating(product.rating)

    card.append(cardImg, cardTitle, cardDescription, readmoreLink, cardPrice, ratingDiv)
    root.append(card);

  });
  function showModal(product) {
    modal.style.display = 'flex';
    modal.style.top = `${scrollY + 100}px`;
    modal.style.left = `${(window.outerWidth - 900) / 2}px`;

    modal.innerHTML = '';

    let closeModal = document.createElement('div');
    closeModal.innerHTML = '<i class="las la-times"></i>'
    closeModal.classList.add('close-modal');
    closeModal.onclick = () => { modal.style.display = 'none'; }

    let imgContainer = document.createElement('div');
    imgContainer.classList = 'img-container';

    product.images.forEach(image => {
      let imgInner = document.createElement('div');
      let modalImg = document.createElement('img');
      modalImg.src = image;
      imgInner.append(modalImg)
      imgContainer.append(imgInner);
      modal.append(imgContainer);
    })
    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description-div');

    let modalTitle = document.createElement('h2')
    modalTitle.innerText = product.title;

    let modalText = document.createElement('p');
    modalText.innerText = product.description;

    let modalPrice = document.createElement('h3');
    modalPrice.innerText = `Price: ${product.price}$`;

    let modalAdd = document.createElement('button');
    modalAdd.classList.add('modal-btn-add')
    modalAdd.innerHTML = `<i class="las la-shopping-bag"></i> Add To Cart`;

    descriptionDiv.append(modalTitle, modalText, modalPrice, modalAdd);
    modal.append(descriptionDiv, closeModal,);


    console.log(product);
  }
}

function closeModal() {

}

function setRating(rating) {

  let count = Math.round(rating);
  let maxRating = 5;
  let activeStar = '<span class="fa fa-star active"></span>'
  let star = '<span class="fa fa-star"></span>'
  let stars = '';
  for (let i = 0; i < maxRating; i++) {
    if (i < count) {
      stars += activeStar;
    } else stars += star;
  }
  return stars
}


// // ==============================
getProducts(url);

{/* <i class="fa-solid fa-basket-shopping-simple"></i> */ }


// function sortElems(data, type){
//   if (type === '1'){
//       data.sort((crElem, nxElem) => crElem.price - nxElem.price)
//   } else if (type === '2'){
//       data.sort((crElem, nxElem) => nxElem.price - crElem.price)
//   } else if (type === '0'){
//       data.sort((crElem, nxElem) => crElem.id - nxElem.id)
//   }
//   return data
// }