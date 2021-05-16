import { Image, Input, SVGIcon } from "components";
import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  position: relative;
  margin: 0 auto;
`;

const InputBackground = styled.div`
  background-color: #c4c4c4;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputImage = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [previewImageURL, setPreviewImageURL] = useState(null);

  const handlerImagePreview = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const imagePreview = e.target.files[0];

    console.log(imagePreview);

    reader.onload = () => {
      setPreviewImage(imagePreview);
      setPreviewImageURL(reader.result);
    };

    if (imagePreview) {
      reader.readAsDataURL(imagePreview);
    }
  };

  return (
    <InputWrapper>
      {previewImage && (
        <Image
          src={previewImageURL}
          accept="image/jpeg, image/png, image/jpg, image/webp, image/gif"
          $width="100%"
          $height="100%"
          $position="absolute"
          $top="0"
          $left="0"
          $borderRadius="10px"
          $zIndex="9"
        />
      )}
      <Input
        type="file"
        $opacity="0"
        $zIndex="9999"
        $width="100%"
        $height="100%"
        $position="relative"
        onChange={handlerImagePreview}
      />
      <InputBackground>
        <SVGIcon type="PlusButton" $width="20px" $height="20px" />
        사진 업로드
      </InputBackground>
    </InputWrapper>
  );
};

export default InputImage;
