import { Button, Container, InputImage } from "components";
import { Head } from "containers";
import { color } from "styles/color";
import React, { useState } from "react";
import { db, storage } from "utils/firebaseConfig";
import { useSelector } from "react-redux";
import getToday from "utils/getToday";
import getPostId from "utils/getPostId";

const CarWashCertificationEdit = ({ history }) => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const state = useSelector((state) => state.auth);

  const handlerCarWashImageUpload = () => {
    const uploadUserEmail = state.currentUser.email;

    const uploadImage = storage
      .ref(`images/${uploadUserEmail}/${image.name}`)
      .put(image);

    uploadImage.on(
      "state_change",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(`${uploadUserEmail}/${image.name}`)
          .getDownloadURL()
          .then((url) => {
            uploadCertificationImage(url);
            history.push("/");
          });
      }
    );

    const uploadCertificationImage = (url) => {
      db.collection("certificationImage").doc(getPostId()).set({
        name: state.currentUser.name,
        email: state.currentUser.email,
        uid: state.currentUser.uid,
        profileImg: state.currentUser.defaultProfileImage,
        uploadDate: getToday(),
        image: url,
        postid: getPostId(),
        likeCount: 0,
      });
    };
  };

  return (
    <>
      <Head as="h2" $margin="22px 0 10px 30px" $fontWeight="400">
        세차 인증 사진
      </Head>
      <Container $flexFlow="column" $alignItems="center">
        <InputImage
          type="file"
          $width="100%"
          $height="100%"
          $borderRadius="10px"
          $opacity="0"
          image={image}
          setImage={setImage}
          imageURL={imageURL}
          setImageURL={setImageURL}
        />
        <Button
          $width="120px"
          $height="30px"
          $backgroundColor={color.themeBackgroundMain}
          $borderRadius="5px"
          $margin="20px 0 0 0"
          onClick={handlerCarWashImageUpload}
        >
          전송
        </Button>
      </Container>
    </>
  );
};

export default CarWashCertificationEdit;
