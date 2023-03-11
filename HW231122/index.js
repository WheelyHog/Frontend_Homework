// 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.

const para = document.createElement("p");
para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dicta porro omnis autem veritatis, impedit corrupti ut explicabo quidem, praesentium veniam possimus, quae reiciendis. Porro quisquam perferendis perspiciatis dolorum officia.";
para.style.cssText = "display: block; width: 500px; margin: 10px; font-size: 20px"

const btn = document.createElement("button");
btn.innerText = "Hide Text";
btn.style.cssText = "margin: 10px; padding: 8px 15px; border-radius: 8px; font-weight: 700"
document.body.append(para, btn);

btn.onclick = () => {
  para.style.display = para.style.display === "block" ? "none" : "block";
  btn.textContent = btn.textContent === "Hide Text" ? "Show Text" : "Hide Text";
}

// 2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.
let colors = ["red", "orange", "yellow", "green", "cyan", "blue", "violet"];

let ul = document.createElement("ul");
ul.style.listStyle = "none";
colors.forEach(element => {
  let li = document.createElement("li");
  li.innerText = element;
  li.style.cssText = `padding: 10px; border: 1px solid black; border-radius: 5px; background: ${element}; width: 150px; color: #fff; margin-bottom: 5px; cursor: pointer`;
  li.onmouseover = () => {
    document.body.style.background = element;
  }
  li.onmouseout = () => {
    document.body.style.background = "white";
  }
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.

let movies = [
  {
    imgLink: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Knockin%E2%80%99_on_Heaven%E2%80%99s_Door_Poster.jpg/220px-Knockin%E2%80%99_on_Heaven%E2%80%99s_Door_Poster.jpg",
    title: "Knockin' on Heaven's Door",
    description: "Two patients (Martin Brest and Rudi Wurlitzer) meet in a hospital, just after learning that both have untreatable diseases with short life expectancies. They start talking about their death that is to come very soon. When they find a bottle of tequila, Martin finds out that Rudi has never seen the sea. Martin tells Rudi that all they talk about in Heaven is how beautiful the sea is.Drunk and still in their pajamas, they steal a baby blue Mercedes-Benz W113 classic roadster and go for their last mission - to see the sea. The car belongs to a crime boss. They rob several small shops, only to find that there is a million deutsche marks in cash in the trunk of their car."
  },
  {
    imgLink: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Armour-of-god-poster.jpg/220px-Armour-of-god-poster.jpg",
    title: "Armour of God",
    description: "Jackie, a.k.a. 'Asian Hawk', is a former musician who becomes an adventurer and treasure hunter. After successfully stealing a sword from an African tribe, he has the weapon auctioned before it is won by May Bannon, the beautiful daughter of Count Bannon. He is reunited with his former bandmate Alan, who seeks his help as his girlfriend Lorelei has been kidnapped by an evil religious cult as a means of acquiring Jackie's services. The cult possesses two pieces of a legendary armour called the 'Armour of God', and they intend to have Jackie bring them the three remaining armour pieces, including the sword. Jackie and Alan strike a deal with Count Bannon, who is in possession of the three armour pieces: they will borrow the armour pieces for their quest to rescue Lorelei with a promise to complete the armour for the Count, on the condition that May accompanies them."
  },
  {
    imgLink: "https://cdn.kanobu.ru/serials/serials/86648494-799f-4076-9cf5-5d9e3df51f69.jpg",
    title: "Silicon Valley",
    description: "Richard Hendricks, an employee of a tech company named Hooli, creates an app called Pied Piper that contains a revolutionary data compression algorithm. Peter Gregory acquires a stake in Pied Piper, and Richard hires the residents of Erlich Bachman's business incubator, including Bertram Gilfoyle and Dinesh Chugtai, along with Jared Dunn, who also defected from Hooli. Meanwhile, Nelson 'Big Head' Bighetti chooses to accept a substantial promotion at Hooli instead, despite his lack of merit for the job."
  }
]

const wrapper = document.createElement("div");
wrapper.className = "wrapper";
wrapper.style.cssText = "display: flex; gap: 50px";

movies.forEach(element => {
  let movieItem = document.createElement("div");
  movieItem.style.width = "300px"

  let imgItem = document.createElement("img");
  imgItem.setAttribute("src", element.imgLink);
  imgItem.style.height = "400px"

  let movieTitle = document.createElement("h3");
  movieTitle.innerText = element.title;
  movieTitle.style.cursor = "pointer";
  movieTitle.onclick = () => {
    movieDescr.style.display = "block";
  }


  let movieDescr = document.createElement("p");
  movieDescr.innerText = element.description;
  movieDescr.style.display = "none";

  movieItem.append(imgItem, movieTitle, movieDescr);
  wrapper.appendChild(movieItem);
  document.body.append(wrapper);
});

// 4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).

const keyboard = ["q","w","e","r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
const keyBox = document.createElement("div");
keyBox.style.width = "700px";
const textarea = document.createElement("textarea");
textarea.style.cssText = "width: 650px; height: 100px; resize: none; margin-top: 50px";
let textfield = "";

for (let i = 0; i < keyboard.length; i++){
  const btn = document.createElement("button");
  btn.textContent = keyboard[i];
  btn.style.cssText = "background: #000; width: 70px; height: 70px; color: #fff; margin: 2px; border-radius: 5px; text-transform: uppercase; font-size: 24px";
  btn.onmousedown = () => {
    textfield += keyboard[i];
    textarea.value = textfield;
    console.log(textfield);
  }
  keyBox.appendChild(btn);
   
}
document.body.append(textarea, keyBox);