const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = '69OY6E73yjavl4eR3trH';

const getLikes = async () => {
    const response = await fetch(`${url}${appID}/likes`);
    const likes = await response.json();
    return likes;
  };

  module.exports = getLikes;
