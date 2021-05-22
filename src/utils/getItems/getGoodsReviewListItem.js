import { db } from "utils/firebaseConfig";

//함수를 사용 할 곳에서 useState로 상태를 관리해주면 set함수를 인수로 넣어주면 된다.
const getGoodsReviewListItem = (postid, setGoodsReview) => {
  db.collection("goodsReview")
    .doc(postid)
    .get()
    .then((doc) => {
      setGoodsReview(doc.data());
    });
};

export default getGoodsReviewListItem;
