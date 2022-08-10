import './style.css';
import  { fetchData } from './modules/utils.js';
import filmtube1 from './assets/filmtube1.png';

fetchData();
const append = document.querySelector('#menu');
export const display = (scores) => {
  for (let i = 0; i < scores?.slice(0, 6).length; i += 1) {
    // create the display page of the project.
    const items = scores[i]
    const div = document.createElement('div');
    div?.classList.add('items')
    const commentButton = document.createElement('button')
    commentButton.innerHTML = "comments";
    commentButton.classList = 'commentBtn';
    const reservationButton = document.createElement('button')
    reservationButton.innerHTML = "Reservations"
    const icon = document.createElement('i')
    icon.className = 'fa-regular fa-heart'
    const likes = document.createElement('div')
    likes.innerHTML = '5 likes'
    likes.classList.add('likes')
    const snacksimg = new Image(300, 300);
    snacksimg.className = 'img';
    snacksimg.setAttribute('src', items?.image);
    const titleDiv = document.createElement('div')
    titleDiv?.classList.add('titleDiv')
    icon.style.lineHeight = 3.3
    icon.style.marginLeft = '18px'
    const title = document.createElement('p')
    title.innerHTML = items?.title
    titleDiv.appendChild(title)
    titleDiv.appendChild(icon)
    div.appendChild(snacksimg)
    div.appendChild(titleDiv)
    div.appendChild(likes)
    div.appendChild(commentButton)
    div.appendChild(reservationButton)
    append.appendChild(div)
    commentButton.addEventListener('click', () => {
      //create the Pop up window to the comments.
      const commentPopUp = document.querySelector('.popComment');
      const div = document.createElement('div');
      div?.classList.add('popupitems')
      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.classList = 'delete';
      deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      div.appendChild(deleteBtn);
      const movieImg = new Image(300, 300);
      movieImg.className = 'img';
      movieImg.setAttribute('src', items?.image);
      const titleDiv = document.createElement('div')
      titleDiv?.classList.add('titleDiv')
      const title = document.createElement('h2')
      title.innerHTML = items?.title
      const ul = document.createElement('ul');
      ul.classList.add('info');
      const li1 = document.createElement('li')
      li1.classList = 'infoChild';
      li1.innerText = items?.titleOriginal;
      ul.appendChild(li1);
      const li3 = document.createElement('li')
      li3.classList = 'infoChild';
      li3.innerHTML = items?.rating;
      ul.appendChild(li3);
      const li4 = document.createElement('li')
      li4.classList = 'infoChild';
      li4.innerText = items?.release;      
      ul.appendChild(li4);
      title.appendChild(ul);
      div.appendChild(movieImg);
      div.appendChild(title);
      titleDiv.appendChild(div);
      commentPopUp.appendChild(titleDiv);
      commentPopUp.classList.add('.active');
    });

    reservationButton.addEventListener('click', () => {
      // create the Pop up window to the reservation.
      const commentPopUp = document.querySelector('.popComment');
      const div = document.createElement('div');
      div?.classList.add('popupitems')
      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.classList = 'delete';
      deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      div.appendChild(deleteBtn);
      const movieImg = new Image(300, 300);
      movieImg.className = 'img';
      movieImg.setAttribute('src', items?.image);
      const titleDiv = document.createElement('div')
      titleDiv?.classList.add('titleDiv')
      const title = document.createElement('h2')
      title.classList = 'title';
      title.innerHTML = items?.title
      const ul = document.createElement('ul');
      ul.classList.add('info');
      const li1 = document.createElement('li')
      li1.classList = 'infoChild';
      li1.innerText = items?.titleOriginal;
      ul.appendChild(li1);
      const li3 = document.createElement('li')
      li3.classList = 'infoChild';
      li3.innerHTML = items?.rating;
      ul.appendChild(li3);
      const li4 = document.createElement('li')
      li4.classList = 'infoChild';
      li4.innerText = items?.release;      
      ul.appendChild(li4);
      title.appendChild(ul);
      div.appendChild(movieImg);
      div.appendChild(title);
      titleDiv.appendChild(div);
      commentPopUp.appendChild(titleDiv);
      commentPopUp.classList.add('.active');
    });
  }
};