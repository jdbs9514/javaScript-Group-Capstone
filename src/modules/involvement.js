const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = '69OY6E73yjavl4eR3trH';

const postLike = async (itemID) => {
  const array = await fetch(`${url}${appID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemID }),
  });
  const post = await array.text();
  return post;
};

const getLikes = async () => {
  const array = await fetch(`${url}${appID}/likes`);
  const likes = await array.json();
  return likes;
};

const postComment = async (_id, _name, _comment) => {
  const array = await fetch(`${url}${appID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: _id,
      username: _name,
      comment: _comment,
    }),
  });
  const post = await array.text();
  return post;
};

const getComments = async (_id) => {
  const array = await fetch(`${url}${appID}/comments?item_id=${_id}`);
  const comments = await array.json();
  return comments;
};

export {
  postLike,
  getLikes,
  postComment,
  getComments,
};