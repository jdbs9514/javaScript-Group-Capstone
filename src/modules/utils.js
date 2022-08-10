// export const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '23e1d48543msh69a29a6c279791ap1bca45jsn8e0256d8d8f5',
// 		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
// 	}
// };
// export const fetchData = async () => {
// fetch('https://movies-app1.p.rapidapi.com/api/movies', options)
// 	.then(response => response.json())
// 	.then(response => {
//        let data = response
//        console.log(data)
//        return data;
//     })

// 	.catch(err => console.error(err))
// };
const append = document.querySelector('#menu')

export const display = (scores) => {
  for (let i = 0; i < scores?.slice(0, 6).length; i += 1) {
    const items = scores[i]
    const div = document.createElement('div');
    div?.classList.add('items')
   const commentButton = document.createElement('button')
   commentButton.innerHTML = "comments"
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
    const title = document.createElement('p') 
    title.innerHTML = items?.title
    titleDiv.appendChild(title)
    titleDiv.appendChild(icon)
    div.appendChild(snacksimg)
    div.appendChild(titleDiv)
    // div.appendChild(icon)
    div.appendChild(likes)
    div.appendChild(commentButton)
    div.appendChild(reservationButton)
    append.appendChild(div)
    // document.body.appendChild(append);
  }
  }

const fetchData = async () => {
    let scores = [];
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
          display(scores)
      })
      .catch((error) => {
        throw error;
      });
      return scores
  };
  
  export default fetchData;
  

