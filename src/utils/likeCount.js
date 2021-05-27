import { db } from "./firebaseConfig";
import getCertificationPost from "./post/getCertificationPost";

export const likeCountPlus = (postid, setImages) => {
  let likeCount = 0;

  db.collection("certificationImage")
    .doc(postid)
    .get()
    .then((doc) => {
      likeCount = doc.data().likeCount;
      db.collection("certificationImage")
        .doc(postid)
        .set({ likeCount: likeCount + 1 }, { merge: true });
      getCertificationPost("certificationImage", setImages);
    });
};

export const getLikeCount = (postid, setLikeCount) => {
  db.collection("certificationImage")
    .doc(postid)
    .get()
    .then((doc) => {
      console.log(doc.data());
    });
};
