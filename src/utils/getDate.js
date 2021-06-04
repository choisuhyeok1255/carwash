const getDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return `${month}월${date}일`;
};

export default getDate;
