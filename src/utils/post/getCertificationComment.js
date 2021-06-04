import { db } from "utils/firebaseConfig";

const getCertificationComment = (postid, setComments) => {
  const temp = [];

  db.collection("certificationImage")
    .doc(postid)
    .get()
    .then((doc) => {
      temp.push(doc.data().comment);
      setComments(...temp);
    });
};

export default getCertificationComment;
