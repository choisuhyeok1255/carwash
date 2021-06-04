import { db } from "utils/firebaseConfig";
import getDate from "utils/getDate";

const setCertificationComment = (
  postid,
  userName,
  comment,
  setComments,
  loginUserUid
) => {
  const temp = [];

  db.collection("certificationImage")
    .doc(postid)
    .get()
    .then((doc) => {
      temp.push(...doc.data().comment);
      temp.push({
        name: userName,
        comment: comment,
        uid: loginUserUid,
        date: getDate(),
      });

      const indexPlusTemp = temp.map((item, index) => {
        return { ...item, index: index };
      });

      db.collection("certificationImage")
        .doc(postid)
        .update({ comment: indexPlusTemp });
      setComments(temp);
    });
};

export default setCertificationComment;
