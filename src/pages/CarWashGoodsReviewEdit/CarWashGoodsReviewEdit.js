import { Button, Container, Input, InputImage, TextArea } from "components";
import React from "react";
import { color } from "styles/color";

const CarWashGoodsReviewEdit = () => {
  return (
    <Container $flexFlow="column" $alignItems="center">
      <InputImage
        type="file"
        $width="100%"
        $height="100%"
        $borderRadius="10px"
        $opacity="0"
      ></InputImage>
      <Input
        placeholder="제목을 입력해주세요."
        $width="300px"
        $height="36px"
        $margin="22px 0 0 0"
        $padding="0 0 0 10px"
        $border="1px solid black"
        $borderRadius="5px"
      />
      <TextArea
        placeholder="내용을 입력해주세요."
        $width="300px"
        $height="210px"
        $margin="10px 0 0 0"
        $padding="10px 0 0 10px"
        $border="1px solid black"
        $borderRadius="5px"
      ></TextArea>
      <Button
        $width="120px"
        $height="30px"
        $backgroundColor={color.themeMain}
        $borderRadius="5px"
        $margin="20px 0 0 0"
      >
        완료
      </Button>
    </Container>
  );
};

export default CarWashGoodsReviewEdit;
