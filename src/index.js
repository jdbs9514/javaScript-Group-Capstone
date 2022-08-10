//  import { fromPairs } from "lodash";
//  import './style.css';
//  import cards from "./modules/cards.js";
// export let scores=[];

let scores = [];
const append = document.querySelector('#menu')
export const fetchData = async () => {
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
        for (let i = 0; i < scores?.slice(0, 6).length; i += 1) {
          const items = scores[i]
          console.log(items)
          const div = document.createElement('div');
          div.innerHTML = items?.title
          const snacksimg = new Image(300, 300);
          snacksimg.className = 'img';
          snacksimg.setAttribute('src', items?.image);
          div.appendChild(snacksimg)
          append.appendChild(div)
          // document.body.appendChild(append);
      
        }
    })
    .catch((error) => {
      throw error;
    });
};
 fetchData();


// const span = document.getElementById('popUpComments');
// const popUp1Ul = document.getElementById('commentUl');
// const popUpCommentCont = document.createElement('li');
// popUpCommentCont.classList = 'popUp1';
// popUpCommentCont.innerText = "my comment"/* `<li class="popUp1"><span>${user}</span><span class="span">${comment}</span></li>`;  */
// popUp1Ul.appendChild(popUpCommentCont);
// document.span.appendChild(popUp1Ul);



// https://static.tvmaze.com/js/paq.js?v=1626190720
/* let baseUrl = 'https://www.tvmaze.com/'
const retrieveFromAPI = async () => {
  const com = await fetch(`${baseUrl}js/paq.js?v=1626190720/comments`);
  const comm = await com.json();
  const comments = comm.result;
  return comments;
};
const commentBoardWrapper = document.getElementById('commentList');
const commentBoard = ({ user, comment }) => {
  commentBoardWrapper.innerHTML += `<li class="animated bounce"><span>${user}</span><span class="span">${comment}</span></li>`;
};

const displayComments = async () => {
  const comment = await retrieveFromAPI();
  comments.forEach((comment) => {
    scoreBoard(comment);
  });
};

// https://static.tvmaze.com/js/paq.js?v=1626190720

 const retrieveFromAPIres = async () => {
  const res = await fetch(`${baseUrl}js/paq.js?v=1626190720/reserves`);
  const reserv = await res.json();
  const reserves = reserv.result;
  return reserves;
 };

const reserveBoardWrapper = document.getElementById('reserveList');
const reserveBoard = ({ user, reserve }) => {
  reserveBoardWrapper.innerHTML += `<li class="animated bounce"><span>${user}</span><span class="span">${reserve}</span></li>`;
};

const displayReserved = async () => {
  const reserves = await retrieveFromAPI();
  reserves.forEach((reserve) => {
    reserveBoard(reserve);
  });
};

const comments = document.querySelector('button#comments');
comments.addEventListener('click', displayComments);

const reservations = document.querySelector('button#reservations');
reservations.addEventListener('click', displayReserved);
 */