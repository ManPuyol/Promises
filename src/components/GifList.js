import React, { useEffect, useState } from 'react'
import { giphyAPI, notFound, wordnikAPI } from '../URLs/URLs'

export default function GifList () {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function setup () {
    let promises = []

    for (let i = 2; i < 7; i++) {
      promises.push(wordGIF(i))
    }
    setIsLoading(true)
    Promise.all(promises)
      .then(results => {
        setResults(results)
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }

  async function wordGIF (num) {
    //cambiar dom mostrando loader
    let response1, response2, json1, json2, img_url
    //await
    try {
      //Get Word
      response1 = await fetch(`${wordnikAPI}&minLength=${num}&maxLength=${num}`)

      json1 = await response1.json()
      //Get GIF
      response2 = await fetch(giphyAPI + json1.word)
      json2 = await response2.json()

      img_url = null
      try {
        img_url = json2.data[0].images['fixed_height_small'].url
      } catch (err) {
        console.log('No Img found for ' + json1.word)
      }
    } catch (error) {}
    return {
      word: json1.word,
      img: img_url
    }
  }

  useEffect(() => {
    setup()
  }, [])
  if (isLoading) {
    return (
      <div className='lds-facebook'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
  return (
    <div>
      {results.map(result => (
        <div key='result.img' className='img__Container'>
          <p>{result.word ? result.word : 'Not Found'}</p>
          <img src={result.img ? result.img : notFound} />
        </div>
      ))}
    </div>
  )
}
