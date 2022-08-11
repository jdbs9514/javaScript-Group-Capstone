/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc";
const key = "367c6d3a0d8f351d5debe2e3965cfebc";
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=367c6d3a0d8f351d5debe2e3965cfebc&page=1

const imgPath = "https://image.tmdb.org/t/p/w1280/";
const bigContainer = document.querySelector('.title-div');

fetch(`${url}&api_key=${key}&page=1`)
  .then((response) => response.json())
  .then((data) => {
    const array = data.results;
    array.forEach((movie) => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('items');
      movieCard.id = movie.id;
      console.log(movie);
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
  });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksV0FBVyxJQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRCx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVybCA9XHJcbiAgXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyL21vdmllP3NvcnRfYnk9cG9wdWxhcml0eS5kZXNjXCI7XHJcbmNvbnN0IGtleSA9IFwiMzY3YzZkM2EwZDhmMzUxZDVkZWJlMmUzOTY1Y2ZlYmNcIjtcclxuLy8gaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9kaXNjb3Zlci9tb3ZpZT9zb3J0X2J5PXBvcHVsYXJpdHkuZGVzYyZhcGlfa2V5PTM2N2M2ZDNhMGQ4ZjM1MWQ1ZGViZTJlMzk2NWNmZWJjJnBhZ2U9MVxyXG5cclxuY29uc3QgaW1nUGF0aCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzEyODAvXCI7XHJcbmNvbnN0IGJpZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1kaXYnKTtcclxuXHJcbmZldGNoKGAke3VybH0mYXBpX2tleT0ke2tleX0mcGFnZT0xYClcclxuICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgYXJyYXkgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICBhcnJheS5mb3JFYWNoKChtb3ZpZSkgPT4ge1xyXG4gICAgICBjb25zdCBtb3ZpZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbW92aWVDYXJkLmNsYXNzTGlzdC5hZGQoJ2l0ZW1zJyk7XHJcbiAgICAgIG1vdmllQ2FyZC5pZCA9IG1vdmllLmlkO1xyXG4gICAgICBjb25zb2xlLmxvZyhtb3ZpZSk7XHJcbiAgICAgIG1vdmllQ2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1vdmllLWltZ1wiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiJHtpbWdQYXRoICsgbW92aWUucG9zdGVyX3BhdGh9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibW92aWUtdGl0bGVcIj4ke21vdmllLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudHNCdG5cIj5jb21tZW50czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlc2VydmF0aW9uc1wiPnJlc2VydmF0aW9uczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlLWNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtaGVhcnRcIj4gIDUgbGlrZXM8L2k+IFxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jb21tZW50XCI+ICA1IGNvbW1lbnRzPC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgYmlnQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmllQ2FyZCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9