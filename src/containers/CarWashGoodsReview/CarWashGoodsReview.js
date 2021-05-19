import { Container, Image } from "components";
import { MainHeading } from "containers";
import React, { useEffect, useState } from "react";
import { db } from "utils/firebaseConfig";

const CarWashGoodsReview = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    db.collection("goodsReview")
      .get()
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((doc) => {
          temp.push({
            image: doc.data().image,
          });
        });
        setImages(temp);
      });
  }, []);

  return (
    <>
      <MainHeading
        toEdit="/CarWashGoodsReviewEdit"
        toPage="/CarWashGoodsReviewPage"
        $fontSize="2rem"
        $margin="55px 0 20px 0"
      >
        사용 후기
      </MainHeading>
      <Container $flexWrap="wrap" $justifyContent="space-between">
        {Images.map((image, index) => {
          return (
            <Image
              src={image.image}
              alt="사용후기 미리보기 사진"
              $width="170px"
              $height="170px"
              $margin="0 0 15px 0"
            ></Image>
          );
        })}
      </Container>
    </>
  );
};

export default CarWashGoodsReview;
