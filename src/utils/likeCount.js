import { db } from "./firebaseConfig";

export const getLikeCount = (postid) => {
  let likeCount = 0;

  db.collection("certificationImage")
    .doc(postid)
    .get()
    .then((doc) => {
      likeCount = doc.data().likeCount;
      db.collection("certificationImage")
        .doc(postid)
        .set({ likeCount: likeCount + 1 }, { merge: true });
    });
};
