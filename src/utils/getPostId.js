const getPostId = () => {
  const postId = new Date();
  const year = postId.getFullYear();
  const month = postId.getMonth() + 1;
  const date = postId.getDate();
  const hour = postId.getHours();
  const minute = postId.getMinutes();
  const second = postId.getSeconds();

  return `${year}${month}${date}${hour}${minute}${second}`;
};

export default getPostId;
