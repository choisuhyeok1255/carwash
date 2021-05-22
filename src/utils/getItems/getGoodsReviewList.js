import { db } from "utils/firebaseConfig";

//함수를 사용 할 곳에서 useState로 상태를 관리해주면 set함수를 인수로 넣어주면 된다.
const getGoodsReviewList = (setGoodsReview) => {
  db.collection("goodsReview")
    .get()
    .then((querySnapshot) => {
      let temp = [];
      querySnapshot.forEach((doc) => {
        temp.push({
          image: doc.data().image,
          name: doc.data().name,
          uploadDate: doc.data().uploadDate,
          subject: doc.data().subject,
          mainText: doc.data().mainText,
          postid: doc.data().postid,
          email: doc.data().email,
        });
      });
      setGoodsReview(temp);
    });
};

export default getGoodsReviewList;
