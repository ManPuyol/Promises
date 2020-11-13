const wordnikAPI =
  "https://api.wordnik.com/v4/words.json/randomWord?&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";
const giphyAPI =
  "https://api.giphy.com/v1/gifs/search?api_key=hK6EInRGwQIIv1JKslPVuLDlRft9JZJ4&limit=25&offset=0&rating=pg&lang=en&q=";
const LoaderHTML =
  '<div class="lds-facebook"><div></div><div></div><div></div></div> ';
const notFound =
  "https://v3b4d4f5.rocketcdn.me/wp-content/uploads/1/feature-image-soft-404-errors-150x150.png";

function showContainer(word, url) {
  let containerCode = `<h5>${word}</h5> <img src="${url}">`;
  document
    .getElementById("container")
    .insertAdjacentHTML("beforeend", containerCode);
}

function testLoader() {

  document
    .getElementById("loader")
    .insertAdjacentHTML("afterbegin", LoaderHTML);

}

function deleteLoader() {
  let el = document.getElementById("loader");
  el.parentNode.removeChild(el);
}
//cambio


function setup() {
  let promises = [];

  for (i = 2; i < 7; i++) {
    promises.push(wordGIF(i));
  }

  Promise.all(promises)
    .then((results) => {
      deleteLoader();
      for (i = 0; i < results.length; i++) {
        if (results[i].img !== null) {
          showContainer(results[i].word, results[i].img);
        } else {
          showContainer(results[i].word, notFound);
        }
      }
    })
    .catch((err) => console.log(err));
}

async function wordGIF(num) {
  let response1, response2, json1, json2, img_url;
  //cambiar dom mostrando loader
  testLoader();
  //await
  try {
    //Get Word
    response1 = await fetch(`${wordnikAPI}&minLength=${num}&maxLength=${num}`);

    json1 = await response1.json();
    //Get GIF
    response2 = await fetch(giphyAPI + json1.word);
    json2 = await response2.json();

    img_url = null;
    try {
      img_url = json2.data[0].images["fixed_height_small"].url;
    } catch (err) {
      console.log("No Img found for " + json1.word);
    }

  } catch (error) {}


  return {
    word: json1.word,
    img: img_url,
  };
}


setup();

