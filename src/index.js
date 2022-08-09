import { fromPairs } from "lodash";
import './style.css';

const span = document.getElementById('popUpComments');
const popUp1Ul = document.getElementById('commentUl');
const popUpCommentCont = document.createElement('li');
popUpCommentCont.classList = 'popUp1';
popUpCommentCont.innerText = "my comment"/* `<li class="popUp1"><span>${user}</span><span class="span">${comment}</span></li>`;  */
popUp1Ul.appendChild(popUpCommentCont);
document.span.appendChild(popUp1Ul);

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