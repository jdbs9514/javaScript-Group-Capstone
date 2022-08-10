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
 export let scores=[];
export const fetchData = async () => {
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
         console.log(data.results)
          scores = data?.results;
      })
      .catch((error) => {
        throw error;
      });
  };
  
  

