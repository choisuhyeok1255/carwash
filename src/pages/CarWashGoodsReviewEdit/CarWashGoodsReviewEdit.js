import {
  Container,
  Input,
  InputImage,
  TextArea,
  LinkButton,
  Span,
} from "components";
import { Head } from "containers";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { color } from "styles/color";
import { db, storage } from "utils/firebaseConfig";
import getPostId from "utils/getPostId";
import getToday from "utils/getToday";

const CarWashGoodsReviewEdit = ({ history }) => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [subject, setSubject] = useState("");
  const [mainText, setMainText] = useState("");
  const state = useSelector((state) => state.auth);

  const onGoodsImageUploadHandler = () => {
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
            uploadGoodsReview(url);
            history.push("/");
          });
      }
    );

    const uploadGoodsReview = (url) => {
      db.collection("goodsReview").doc(getPostId()).set({
        name: state.currentUser.name,
        email: state.currentUser.email,
        uid: state.currentUser.uid,
        uploadDate: getToday(),
        image: url,
        postid: getPostId(),
        subject: subject,
        mainText: mainText,
      });
    };
  };

  const onMainTextOnChangeHandler = (e) => {
    setMainText(e.target.value);
  };

  const onSubjectOnChangeHandler = (e) => {
    setSubject(e.target.value);
  };

  return (
    <>
      <Head as="h2" $margin="22px 0 10px 30px" $fontWeight="400">
        사용 후기 글쓰기
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
        <Input
          placeholder="제목을 입력해주세요."
          $width="300px"
          $height="36px"
          $margin="22px 0 0 0"
          $padding="0 0 0 10px"
          $border="1px solid black"
          $borderRadius="5px"
          onChange={onSubjectOnChangeHandler}
          value={subject}
        />
        <TextArea
          placeholder="내용을 입력해주세요."
          $width="300px"
          $height="210px"
          $margin="10px 0 0 0"
          $padding="10px 0 0 10px"
          $border="1px solid black"
          $borderRadius="5px"
          onChange={onMainTextOnChangeHandler}
          value={mainText}
        />
        <LinkButton
          to={{
            pathname: "/",
            state: {
              activeTab: 1,
            },
          }}
          $width="120px"
          $height="30px"
          $fontSize="1.5rem"
          $backgroundColor={color.themeBackgroundMain}
          $borderRadius="5px"
          $margin="20px 0 0 0"
          $display="flex"
          $justifyContent="center"
          $alignItems="center"
          onClick={onGoodsImageUploadHandler}
        >
          <Span>완료</Span>
        </LinkButton>
      </Container>
    </>
  );
};

export default CarWashGoodsReviewEdit;
