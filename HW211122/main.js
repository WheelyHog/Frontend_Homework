let cats = [
  {
    No: 1,
    Breed: "Abyssynian",
    ImgLink: "https://petkeen.com/wp-content/uploads/2021/05/Abyssinian-cat_Osetrik_Shutterstock-760x507.jpg",
  },
  {
    No: 2,
    Breed: "Persian",
    ImgLink: "https://www.thesprucepets.com/thmb/tahxV2iTKbKf_pt8gWucJySHpzc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-904624038-8a3d9763601742258dd48df05e1ce69f.jpg",
  },
  {
    No: 3,
    Breed: "Siamese",
    ImgLink: "https://uk.mypetandi.com/sites/g/files/adhwdz331/files/styles/paragraph_image/public/2018-03/siamese_cat_01391.jpg?itok=FCuWl_1G",
  },
  {
    No: 4,
    Breed: "Snowshoe",
    ImgLink: "https://www.vetwest.com.au/sites/default/files/styles/large/public/images/article/snowshoe_0.jpg?itok=7RHRvuNn",
  },
  {
    No: 5,
    Breed: "Somali",
    ImgLink: "https://www.purina.co.uk/sites/default/files/2022-06/Somali.jpg?itok=tDNkUIlQ",
  },
  {
    No: 6,
    Breed: "Maine Coon",
    ImgLink: "https://www.maine.gov/sos/kids/themes/kids/images/cooncat.jpeg",
  }
]

for (let i = 0; i < cats.length; i++) {
  let imgLink = document.createElement("a");

  let smallImg = document.createElement("img");
  smallImg.setAttribute("src", cats[i].ImgLink);
  smallImg.style.height = "100px";
  smallImg.style.marginRight = "30px";
  smallImg.onclick = () => {
    console.log(i);
    bigImg.setAttribute("src", cats[i].ImgLink);

    descr.innerText = cats[i].Breed;
  }


  imgLink.append(smallImg);
  document.body.append(imgLink);
}
let imgContainer = document.createElement("div");
let bigImg = document.createElement("img");
let descr = document.createElement("h3");
bigImg.style.width = "800px";
imgContainer.append(bigImg, descr);
document.body.append(imgContainer);




