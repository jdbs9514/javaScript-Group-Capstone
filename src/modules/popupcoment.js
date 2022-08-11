const popUpContainer = document.querySelector('.popupcomment');


function displayPopUp(movies) {
    const commentBtn = document.querySelectorAll('.commentsBtn');
    commentBtn.forEach(element => {
        element.addEventListener('click', () => {
            const moviesDiv = element.closest('.items');
            movies.forEach(movie => {
                if (movie.id === Number(moviesDiv.id)) {
                    const popUp = `<div class="popup">
                <button class="delete" type="button"><i class="fa-solid fa-xmark"></i></button>
                <img class="postimage" src="${imgPath + movie.poster_path}" alt="">
                <h2 class="titlemovie">${movie.title}</h2>
                <p class="lorem">${movie.overview}</p>
                <ul class="list">
                  <li class="firstelement">I love this movie</li>
                </ul>
                <form class="formaction">
                  <input class="name" type="text" placeholder="Your name" required>
                  <textarea class="textarea" placeholder="Your insights"></textarea>
                  <button type="submit">COMMENT</button>
                </form>
              </div>`;
                    popUpContainer.innerHTML = popUp;
                }
            });

            //     element.addEventListener('click', () => {
            //         popUpContainer.innerHTML = `<div class="popup">
            //   <button class="delete" type="button"><i class="fa-solid fa-xmark"></i></button>
            //   <img class="postimage" src="${imgPath + movie.poster_path}" alt="">
            //   <h2 class="titlemovie">${movie.title}</h2>
            //   <p class="lorem">${movie.overview}</p>
            //   <ul class="list">
            //     <li class="firstelement">I love this movie</li>
            //   </ul>
            //   <form class="formaction">
            //     <input class="name" type="text" placeholder="Your name" required>
            //     <textarea class="textarea" placeholder="Your insights"></textarea>
            //     <button type="submit">COMMENT</button>
            //   </form>
            // </div>`;
            //     });
        });
    });
}

export default displayPopUp;