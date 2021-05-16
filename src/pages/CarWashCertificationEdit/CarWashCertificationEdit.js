import { Button, Container, InputImage } from "components";
import React from "react";
import { color } from "styles/color";
import firebase from "firebase/app";
import "firebase/storage";
import { firebaseConfig } from "utils";

const CarWashCertificationEdit = () => {
  const storageRef = firebase.storage().ref();

  console.log(storageRef);

  const handlerCarWashImageUpload = (e) => {};

  return (
    <Container $flexFlow="column" $alignItems="center">
      <InputImage
        type="file"
        $width="100%"
        $height="100%"
        $borderRadius="10px"
        $opacity="0"
      ></InputImage>
      <Button
        $width="120px"
        $height="30px"
        $backgroundColor={color.themeMain}
        $borderRadius="5px"
        $margin="20px 0 0 0"
        onClick={handlerCarWashImageUpload}
      >
        완료
      </Button>
    </Container>
  );
};

export default CarWashCertificationEdit;
