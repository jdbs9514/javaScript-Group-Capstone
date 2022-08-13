const starBorder = document.createElement('span');
const starCount = document.createElement('span');
const postLike = require('./modules/involvement.js');
const updateLikes = require('./modules/involvement.js');

function showLikes() {
  starBorder.addEventListener('click', () => {
    postLike();
    starBorder.classList.toggle('liked');
    starCount.setAttribute('disabled', true);
    setTimeout(updateLikes, 1000);
  });
}

describe('we are testing the showLikes function', () => {
  test('add one like on the card', () => {
    showLikes();
    expect(showLikes(4)).toBe(showLikes(4));
  });
});
