const cards = [
    {
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      heading: 'Movies',
      icon: '<i class="fa-solid fa-heart"></i>',
      badge1: 'comments',
      badge2: 'reservation',
     
    },
  ];
  
  const append = document.querrySelector('div.append');
  const sectionD = document.querySelector('div.div');
  sectionD.classList = 'descript';
  
  const planHolder = document.createElement('div');
  planHolder.classList = 'planholder';
  
  for (let i = 0; i < 6; i += 1) {
    const div = document.createElement('div');
    div.classList = 'div';
    planHolder.appendChild(div);
  }
  sectionD.appendChild(planHolder);
  append.appendChild(sectionD);
  export default cards;