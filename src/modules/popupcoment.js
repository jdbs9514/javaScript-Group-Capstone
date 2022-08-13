const popUpContainer = document.querySelector('.popupcomment');

function displayPopUp(array) {
  const commentBtn = document.querySelectorAll('.commentsBtn');
  commentBtn.forEach(element => {
    element.addEventListener('click', () => {
      const moviesDiv = element.closest('.items');
      for (let i = 0; i < array.length; i += 1) {
        if (array[i].id === Number(moviesDiv.id)) {
          const imgPath = 'https://image.tmdb.org/t/p/w1280/';
          const popUp = `<div class="popup">
                <button class="delete" type="button"><i id='delete' class="fa-solid fa-xmark"></i></button>
                <img class="postimage" src="${imgPath + array[i].poster_path}" alt="">
                <h2 class="titlemovie">${array[i].title}</h2>
                <p class="lorem">${array[i].overview}</p>
                <ul class="list">
                  <li class="firstelement">Amalai  I love this movie</li>
                </ul>
                <form class="formaction">
                  <input class="name" type="text" placeholder="Your name" required>
                  <textarea class="textarea" placeholder="Your insights"></textarea>
                  <button id='${array[i].id}' class="submit" type="button">COMMENT</button>
                </form>
              </div>`;
          popUpContainer.innerHTML = popUp;
        }
      }
    });
  });
}

// const hidePopUp = document.querySelector('button.fa-solid.fa-xmark');

export default displayPopUp;