import React, { useEffect, useState } from "react";
import { giphyAPI, notFound } from "../URLs/URLs";
import Header from '../components/Header'
//Componente REACT
export default function GifSearch() {
  //Manejo de estado
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userWord, setUserWord] = useState("");
  //Funcion Principal
  function setup(gifWord) {
    let promises = [];

    // for (let i = 2; i < 7; i++) {
      promises.push(wordGIF(gifWord));
    // }
    setIsLoading(true);
    Promise.all(promises)
      .then((results) => {
        setResults(results);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }
  //Buscar informacion en APIs
  async function wordGIF(gifWord) {
    let response, json, img_url;
    //await
    try {
      //Get GIF
      response = await fetch(giphyAPI + gifWord);
      json = await response.json();

      img_url = null;
      try {
        img_url = json.data[0].images["fixed_height_small"].url;
      } catch (err) {
        console.log("No Img found for " + gifWord);
      }
    } catch (error) {}
    return {
      word: gifWord,
      img: img_url,
    };
  }

//   useEffect(() => {
//     setup();
//   }, []);
  //Cambiar DOM mostrando loader mientras llegan las promesas
  if (isLoading) {
    return (
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  const getWord = (e) => {
    e.preventDefault();
    setUserWord(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setup(userWord);
  };
  //DISPLAY
  return (
    <div>
      <Header/>
      <form onSubmit={onFormSubmit}>
        <input type="text" onChange={getWord} />
        <button>Get gif!</button>
      </form>
      {results.map((result) => (
        <div key={result.img} className="img__Container">
          <p>{result.word ? result.word : "Not Found"}</p>
          <img src={result.img ? result.img : notFound} />
        </div>
      ))}
    </div>
  );
}
