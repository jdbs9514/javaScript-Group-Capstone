import './style.css';
import displayPopUp from './modules/popupcoment.js';
import { addElements } from './modules/showComments';

const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const key = '367c6d3a0d8f351d5debe2e3965cfebc';

const imgPath = 'https://image.tmdb.org/t/p/w1280/';
const bigContainer = document.querySelector('.title-div');

fetch(`${url}&api_key=${key}&page=1`)
  .then((response) => response.json())
  .then((data) => {
    const array = data.results;
    console.log(array.title)
    console.log(data);
    array.forEach((movie) => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('items');
      movieCard.id = movie.id;
      movieCard.innerHTML = `
              <img class="movie-img" 
                src="${imgPath + movie.poster_path}" alt="">
              <h2 class="movie-title">${movie.title}</h2>
              <div class="reaction">
                <button class="commentsBtn">comments</button>
                <button class="reservations">reservations</button>
              </div>
              <div class="like-comments">
                <i class="fa-regular fa-heart">  5 likes</i> 
                <i class="fa-solid fa-comment">  5 comments</i>
              </div>`;
      bigContainer.appendChild(movieCard);
    });
    displayPopUp(array);
  });

  window.addEventListener('click', (e) => {
    if(e.target.className === 'submit') {
      e.preventDefault();
      addElements();
      displayComments();
    }
  })

 /*  function deletePopUp() {
  const popUp = document.querySelector('.popupcomment')
  const div = document.querySelector('.popup')
  window.addEventListener('click', (e) => {
  if(e.target.id === 'delete') {
    console.log('hola')
    popUp.parentNode.removeChild(div);
  }
})
} */

// window.onload = deletePopUp();
