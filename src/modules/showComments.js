// ADD NAME AND SCORES
function addElements() {
    const name = document.createElement('li');
  
    const inputName = document.querySelector('input.name').value;
    const inputScore = document.querySelector('textarea.textarea').value;
    const t = document.createTextNode(inputName);
    const nameList = document.getElementById('list');
    const s = document.createTextNode(inputScore);
    name.appendChild(t);
    name.appendChild(s);
    nameList.appendChild(name);
}
const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const key = '367c6d3a0d8f351d5debe2e3965cfebc';
const retrieveFromAPI = async () => {
    const res = await fetch(`${url}&api_key=${key}&page=1`);
    const lead = await res.json();
    const results = lead.result;
    return results;
  };
  const commentBoardWrapper = document.getElementById('list');
  const commentBoard = ({ name, comment }) => {
    commentBoardWrapper.innerHTML += `<li class="comment-displayed"><span>${name}</span><span class="span">${comment}</span></li>`;
  };
  
  export const displayComments = async () => {
    const comments = await retrieveFromAPI();
    comments.forEach((comment) => {
      commentBoard(comment);
    });
  };

const addButt = document.querySelector('button#submit');
addButt.addEventListener('click', displayComments);
