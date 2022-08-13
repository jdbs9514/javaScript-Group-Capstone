import './style.scss';
import getData from './modules/extrenalAPI.js';
import { getLikes, postLike } from './modules/involvement.js';
import popup from './modules/popup.js';

const countResults = document.querySelector('h2');

// Update Likes
const refreshLikes = async () => {
  const array = await getLikes();
  document.querySelectorAll('.likesCount').forEach((button) => {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].item_id === Number(button.id)) {
        button.lastChild.textContent = array[i].likes;
      }
    }
  });
};

// Display movies
const movies = document.querySelector('.movies');
const createElement = async (requestURL) => {
  movies.innerHTML = '';
  await getData(requestURL)
    .then((data) => {
      let likesCount = 0;
      const responseArray = data.embedded.episodes;
      responseArray.forEach((el) => {
        const div = document.createElement('div');
        div.classList.add('cardItem');
        const divImg = document.createElement('div');
        divImg.classList.add('cardImg');
        divImg.style.backgroundImage = `url(${el.image.original})`;
        const h1 = document.createElement('h1');
        h1.classList.add('cardName');
        h1.textContent = `S${el.season}E${el.number} ${el.name}`;
        const details = document.createElement('p');
        details.classList.add('cardDetails');
        details.innerHTML = `Plot Summary: <br>${el.summary}`;
        const h2 = document.createElement('h2');
        h2.classList.add('cardRuntime');
        h2.textContent = `Runtime: ${el.runtime} mins Rating: ${el.rating.average}`;

        const likesContainer = document.createElement('div');
        likesContainer.classList.add('likesContainer');

        const likesRate = document.createElement('span');
        likesRate.classList.add('material-icons-round');
        likesRate.classList.add('icons');
        likesRate.classList.add('likesRate');
        likesRate.textContent = 'star_rate';

        const likesCount = document.createElement('span');
        likesCount.classList.add('likesCount');
        likesCount.setAttribute('id', el.id);
        likesCount.textContent = '0';

        const starBorder = document.createElement('span');
        starBorder.classList.add('material-icons-round');
        starBorder.classList.add('icons');
        starBorder.classList.add('starBorder');
        starBorder.textContent = 'star_border';
        starBorder.setAttribute('id', el.id);

        // Like
        starBorder.addEventListener('click', () => {
          postLike(el.show.id);
          starBorder.classList.toggle('liked');
          likesCount.setAttribute('disabled', true);
          setTimeout(refreshLikes, 100);
        });

        const cBtn = document.createElement('button');
        cBtn.classList.add('commentBtn');
        cBtn.textContent = 'Comments';
        likesContainer.append(likesRate, likesCount, starBorder);
        div.append(divImg, likesContainer, h1, h2, details, cBtn);
        movies.append(div);
        likesCount += 1;
        countResults.textContent = `Search Results (${likesCount})`;
      });
    });
};
createElement('https://api.tvmaze.com/shows');

const createElementForShows = async (requestURL) => {
  movies.innerHTML = '';
  await getData(requestURL)
    .then((data) => {
      let likesCount = 0;
      data.forEach((el) => {
        const div = document.createElement('div');
        div.classList.add('cardItem');
        const divImg = document.createElement('div');
        divImg.classList.add('cardImg');
        divImg.style.backgroundImage = `url(${el.image.original})`;
        const h1 = document.createElement('h1');
        h1.classList.add('cardName');
        h1.textContent = el.name;

        const likesContainer = document.createElement('div');
        likesContainer.classList.add('likesContainer');

        const likesRate = document.createElement('span');
        likesRate.classList.add('material-icons-round');
        likesRate.classList.add('icons');
        likesRate.classList.add('likesRate');
        likesRate.textContent = 'star_rate';

        const likesCount = document.createElement('span');
        likesCount.classList.add('likesCount');
        likesCount.setAttribute('id', el.id);
        likesCount.textContent = '0';

        const starBorder = document.createElement('span');
        starBorder.classList.add('material-icons-round');
        starBorder.classList.add('icons');
        starBorder.classList.add('starBorder');
        starBorder.textContent = 'star_border';
        starBorder.setAttribute('id', el.id);

        // Like
        starBorder.addEventListener('click', () => {
          postLike(el.id);
          starBorder.classList.toggle('liked');
          likesCount.setAttribute('disabled', true);
          setTimeout(refreshLikes, 1000);
        });

        const cBtn = document.createElement('button');
        cBtn.classList.add('commentBtn');
        cBtn.setAttribute('id', `b${el.id}`);
        cBtn.textContent = 'Comments';
        likesContainer.append(likesRate, likesCount, starBorder);
        div.append(divImg, likesContainer, h1, cBtn);
        movies.append(div);
        likesCount += 1;
        countResults.textContent = `Number of Elements: ${likesCount}`;

        cBtn.addEventListener('click', () => {
          popup(el.id);
        });
      });
    });
};

window.onload = () => {
  const defaultURL = 'https://api.tvmaze.com/shows';
  createElementForShows(defaultURL);
  setTimeout(refreshLikes, 100);
};