import { db } from "utils/firebaseConfig";

const updatePost = (collection, postid, subject, mainText) => {
  db.collection(collection)
    .doc(postid)
    .update({ subject: subject, mainText: mainText })
    .then(() => {
      console.log("수정 성공");
    });
};

export default updatePost;
