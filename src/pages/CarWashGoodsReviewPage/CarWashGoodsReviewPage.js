import { Container, Image, Paragraph, Span } from "components";
import { SubHeading } from "containers";
import React, { useEffect, useState } from "react";
import { db } from "utils/firebaseConfig";

const CarWashGoodsReviewPage = () => {
  const [goodsReview, setGoodsReview] = useState([]);

  useEffect(() => {
    db.collection("goodsReview")
      .get()
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((doc) => {
          temp.push({
            image: doc.data().image,
            name: doc.data().name,
            uploadDate: doc.data().uploadDate,
            subject: doc.data().subject,
            mainText: doc.data().mainText,
          });
        });
        setGoodsReview(temp);
      });
  }, []);
  return (
    <>
      <SubHeading to="CarWashGoodsReviewEdit" $margin="22px 0 32px 0">
        사용 후기
      </SubHeading>
      <Container $flexFlow="column">
        {goodsReview.map((review, index) => {
          return (
            <Container
              $flexFlow="column"
              $padding="10px 20px"
              $width="354px"
              $border="1px solid black"
              $borderRadius="10px"
              $margin="0 0 20px 0"
            >
              <Span $fontSize="1.5rem" $margin="0 0 10px 0">
                {review.name}
              </Span>
              <Image
                src={review.image}
                alt="사진"
                $width="100%"
                $margin="0 0 10px 0"
              />
              <Paragraph $fontSize="1.5rem" $lineHeight="2rem">
                {review.mainText}
              </Paragraph>
            </Container>
          );
        })}
      </Container>
    </>
  );
};

export default CarWashGoodsReviewPage;
