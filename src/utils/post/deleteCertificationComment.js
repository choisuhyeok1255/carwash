import { db } from "utils/firebaseConfig";

const deleteCertificationComment = (postid, index, setComments) => {
  let temp = [];

  db.collection("certificationImage")
    .doc(postid)
    .get()
    .then((doc) => {
      console.log(doc.data().comment);
      temp = doc.data().comment.filter((comment) => comment.index !== index);

      console.log(temp);

      db.collection("certificationImage").doc(postid).update({ comment: temp });
      setComments(temp);
    });
};

export default deleteCertificationComment;
