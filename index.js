/* 
const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(container);

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://pixabay.com/api/?key=18955611-e1cba7f0b3178e9931fed4cef&image_type=photo&pretty=true ",
  true
);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    (hits) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = hits.user;

      const img = document.createElement("img");
      img.src = hits.pageURL;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(img);
    };
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();
*/

const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(container);

const url =
  "https://pixabay.com/api/?key=18955611-e1cba7f0b3178e9931fed4cef&image_type=photo&pretty=true";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let wall = data.hits;
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const h1 = document.createElement("h1");
    h1.textContent = wall.user;

    const img = document.createElement("img");
    img.src = wall.webformatURL;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img);
  })
  .catch((err) => console.log(err));
