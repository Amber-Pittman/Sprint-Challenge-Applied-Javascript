/* STEP 3: Create Article cards.
-----------------------
Send an HTTP GET request to the following address:
 https://lambda-times-backend.herokuapp.com/articles
Study the response data you get back, closely.
You will be creating a component for each 'article' in the list.
This won't be as easy as just iterating over an array though.
Create a function that will programmatically create the following 
DOM component:

<div class="card">
  <div class="headline">{Headline of article}</div>
  <div class="author">
    <div class="img-container">
      <img src={url of authors image} />
    </div>
    <span>By {authors name}</span>
  </div>
</div>

Create a card for each of the articles and add the card to the DOM.
*/

const articleCard = document.querySelector(".cards-container"); 

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response => {
    let data = response.data.articles;
    let bootstrap = data.bootstrap;
    let javascript = data.javascript;
    let tech = data.technology;
    let jquery = data.jquery;
    let node = data.node;

    function cardInfo(array) {
      array.forEach((item) => {
        articleCard.appendChild(acCreator(item));
      })
    }

    cardInfo(bootstrap);
    cardInfo(javascript);
    cardInfo(tech);
    cardInfo(jquery);
    cardInfo(node);
  }));


function acCreator(tab) {
    const card = document.createElement("div");
    card.classList.add("card");

    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = tab.headline;
    card.appendChild(headline);

    const author = document.createElement("div");
    author.classList.add("author");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-container");

    const image = document.createElement("img");
    image.src = tab.authorPhoto;
    console.log(tab.authorPhoto);
    imgDiv.appendChild(image);

    const authorName = document.createElement("span");
    authorName.textContent = `By ${tab.authorName}`;
    author.appendChild(imgDiv);
    author.appendChild(authorName);

    card.appendChild(author);


    return card;
}