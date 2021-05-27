import { db } from "utils/firebaseConfig";

const getCertificationPost = (collection, setImages) => {
  const temp = [];
  db.collection(collection)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        temp.push({
          image: doc.data().image,
          name: doc.data().name,
          uploadDate: doc.data().uploadDate,
          postid: doc.data().postid,
          email: doc.data().email,
          likeCount: doc.data().likeCount,
          userProfileImg: doc.data().profileImg,
        });
      });
      setImages(temp);
    });
};

export default getCertificationPost;
