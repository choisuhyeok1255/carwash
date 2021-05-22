import { Image, UlContainer } from "components";
import { MainHeading } from "containers";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getGoodsReviewList from "utils/getItems/getGoodsReviewList";

const CarWashGoodsReview = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    getGoodsReviewList(setImages);
  }, []);

  return (
    <>
      <MainHeading
        toPage="/CarWashGoodsReviewList"
        toEdit="/CarWashGoodsReviewEdit"
        $fontSize="2rem"
        $margin="25px 0 20px 0"
      >
        용품 사용 후기
      </MainHeading>
      <UlContainer
        $display="flex"
        $flexFlow="wrap"
        $justifyContent="space-between"
      >
        {Images.map((image, index) => {
          if (index < 4) {
            return (
              <li key={index}>
                <Link
                  to={{
                    pathname: `/CarWashGoodsReviewPage/${image.postid}`,
                    state: {
                      postid: image.postid,
                    },
                  }}
                >
                  <Image
                    src={image.image}
                    alt="사용후기 미리보기 사진"
                    $width="170px"
                    $height="170px"
                    $margin="0 0 15px 0"
                  />
                </Link>
              </li>
            );
          }
          return null;
        })}
      </UlContainer>
    </>
  );
};

export default CarWashGoodsReview;
