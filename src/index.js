import { fromPairs } from "lodash";
import './style.css';
import icon from './assets/icon.png';

const retrieveFromAPI = async () => {
  const res = await fetch(`${baseUrl}/games/KiAaECHQt9kyqpbrRb7E/scores`);
  const lead = await res.json();
  const leaders = lead.result;
  return leaders;
};
const leaderBoardWrapper = document.getElementById('scoreList');
const scoreBoard = ({ user, score }) => {
  leaderBoardWrapper.innerHTML += `<li class="animated bounce"><span>${user}</span><span class="span">${score}</span></li>`;
};

const displayComments = async () => {
  const comment = await retrieveFromAPI();
  comments.forEach((comment) => {
    scoreBoard(comment);
  });
};

const displayReserved = async () => {
  const scores = await retrieveFromAPI();
  scores.forEach((score) => {
    scoreBoard(score);
  });
};

const comments = document.querySelector('button#comments');
comments.addEventListener('click', displayComments);

const reservations = document.querySelector('button#reservations');
reservations.addEventListener('click', displayReserved);
