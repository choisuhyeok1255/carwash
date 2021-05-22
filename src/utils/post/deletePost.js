import { db } from "utils/firebaseConfig";

const deletePost = (collection, postId) => {
  db.collection(collection)
    .doc(postId)
    .delete()
    .then(() => {
      console.log("삭제성공");
    })
    .catch((error) => {
      console.error("에러: ", error);
    });
};

export default deletePost;
