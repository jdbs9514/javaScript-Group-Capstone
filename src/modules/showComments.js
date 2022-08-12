// post name and scores

 export const addElements = () => {
    const inputName = document.querySelector('input.nameInput').value;
    const inputScore = document.querySelector('input.scoreInput').value;
    postToApi(inputName, inputScore);
  };
  
// ADD NAME AND SCORES
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
    commentBoardWrapper.innerHTML += `<li class="firstelement"><span>${name}</span><span class="span">${comment}</span></li>`;
  };
 
   export const displayComments = async () => {
    const comments = await retrieveFromAPI();
    comments.forEach((comment) => {
      commentBoard(comment);
    });
  };

  /* const addButt = document.getElementById('submit');
  addButt.addEventListener('click', (e) => {
    e.preventDefault();
    addElements();
    // form.reset();
  });
   */

  