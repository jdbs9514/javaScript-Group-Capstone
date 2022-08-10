
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/'

import { display } from "../index.js";

export const fetchData = async () => {
    let scores = [];
    await fetch('https://movies-app1.p.rapidapi.com/api/movies', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-RapidAPI-Key': '23e1d48543msh69a29a6c279791ap1bca45jsn8e0256d8d8f5',
    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
      },
    })
      .then((response) => response.json())
      .then((data) => {
          scores = data?.results;
          display(scores)
      })
      .catch((error) => {
        throw error;
      });
      return scores
  };
  
  

