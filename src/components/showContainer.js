import { wordGIF } from './async/wordGIF'

const notFound =
  'https://v3b4d4f5.rocketcdn.me/wp-content/uploads/1/feature-image-soft-404-errors-150x150.png'

  function showContainer (word, url) {
  let containerCode = `<h5>${word}</h5> <img src="${url}">`
  document
    .getElementById('container')
    .insertAdjacentHTML('beforeend', containerCode)
}

function deleteLoader () {
  let el = document.getElementById('loader')
  el.parentNode.removeChild(el)
}

export default function setup () {
  let promises = []

  for (let i = 2; i < 7; i++) {
    promises.push(wordGIF(i))
  }

  Promise.all(promises)
    .then(results => {
      deleteLoader()
      for (let i = 0; i < results.length; i++) {
        if (results[i].img !== null) {
          showContainer(results[i].word, results[i].img)
        } else {
          showContainer(results[i].word, notFound)
        }
      }
    })
    .catch(err => console.log(err))
}

