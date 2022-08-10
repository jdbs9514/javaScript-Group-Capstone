
export const comment = (scores) => {
    for (let i = 0; i < scores?.slice(0, 1).length; i += 1) {
      const items = scores[i]
      const div = document.createElement('div');
      div?.classList.add('items')
     const commentButton = document.createElement('button')
     commentButton.innerHTML = "comments"
          
      const movieImg = new Image(300, 300);
      movieImg.className = 'img';
      movieImg.setAttribute('src', items?.image);
      const titleDiv = document.createElement('div')
      titleDiv?.classList.add('titleDiv')
      const ul = document.createElement('ul');
      ul.classList('info');
      titleDiv.appendChild(ul);
      const li1 = document.createElement('li')
      li1.classList = 'infoChild1';
      ul.appendChild(li1);
      const li2 = document.createElement('li')
      li2.classList = 'infoChild1';
      ul.appendChild(li2);
      const li3 = document.createElement('li')
      li3.classList = 'infoChild3';
      ul.appendChild(li3);
      const li4 = document.createElement('li')
      li4.classList = 'infoChild4';
      ul.appendChild(li4);
      const title = document.createElement('p') 
      title.innerHTML = items?.title
  
      titleDiv.appendChild(title);
      div.appendChild(movieImg);
      div.appendChild(titleDiv);
      div.appendChild(commentButton);
      append.appendChild(div);
    }
    };