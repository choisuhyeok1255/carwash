import { Button, Container, Input, InputImage, TextArea } from "components";
import { Head } from "containers";
import React, { useState } from "react";
import { color } from "styles/color";
import updatePost from "utils/post/updatePost";

const CarWashGoodsReviewModifyPage = ({ location, history }) => {
  const { reviewSubject, reviewMainText, reviewImage, postid } = location.state;
  const [image, setImage] = useState(reviewImage);
  const [imageURL, setImageURL] = useState(reviewImage);
  const [subject, setSubject] = useState(reviewSubject);
  const [mainText, setMainText] = useState(reviewMainText);

  const handlerSubjectOnChange = (e) => {
    setSubject(e.target.value);
  };

  const handlerMainTextOnChange = (e) => {
    setMainText(e.target.value);
  };

  const handlerGoodsModifyUpload = (postid) => {
    updatePost("goodsReview", postid, subject, mainText);
    history.goBack(1);
  };

  return (
    <>
      <Head as="h2" $margin="22px 0 10px 30px" $fontWeight="400">
        사용 후기 수정
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
          onChange={handlerSubjectOnChange}
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
          onChange={handlerMainTextOnChange}
          value={mainText}
        />
        <Button
          $width="120px"
          $height="30px"
          $backgroundColor={color.themeBackgroundMain}
          $borderRadius="5px"
          $margin="20px 0 0 0"
          onClick={() => {
            handlerGoodsModifyUpload(postid);
          }}
        >
          완료
        </Button>
      </Container>
    </>
  );
};

export default CarWashGoodsReviewModifyPage;
