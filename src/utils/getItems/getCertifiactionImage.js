const { db } = require("utils/firebaseConfig");

//함수를 사용 할 곳에서 useState로 상태를 관리해주면 set함수를 인수로 넣어주면 된다.
const getCertifiactionImage = (setImages) => {
  db.collection("certificationImage")
    .get()
    .then((querySnapshot) => {
      let temp = [];
      querySnapshot.forEach((doc) => {
        temp.push({
          image: doc.data().image,
        });
      });
      setImages(temp);
    });
};

export default getCertifiactionImage;
