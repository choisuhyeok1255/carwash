import { Container, Image, Span, SVGIcon } from "components";
import { MainHeading } from "containers";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "utils/firebaseConfig";

const CarWashProfile = () => {
  const [certificationImages, setCertificationImages] = useState([]);
  const [goodsReviews, setGoodsReviews] = useState([]);
  const userProfile = useSelector((state) => state.auth.currentUser);
  const { name, uid, defaultProfileImage } = userProfile;

  useEffect(() => {
    db.collection("certificationImage")
      .get()
      .then((querySnapshot) => {
        let certificationImageTemp = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().uid !== uid) return;
          certificationImageTemp.push({
            image: doc.data().image,
            name: doc.data().name,
            uploadDate: doc.data().uploadDate,
            postid: doc.data().postid,
            email: doc.data().email,
          });
        });
        setCertificationImages(certificationImageTemp);
      });

    db.collection("goodsReview")
      .get()
      .then((querySnapshot) => {
        let goodsReviewsTemp = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().uid !== uid) return;
          goodsReviewsTemp.push({
            image: doc.data().image,
            name: doc.data().name,
            uploadDate: doc.data().uploadDate,
            postid: doc.data().postid,
            email: doc.data().email,
          });
        });
        setGoodsReviews(goodsReviewsTemp);
      });
  }, [uid]);

  return (
    <>
      <Container $flexFlow="column" $alignItems="center">
        <Image
          src={defaultProfileImage}
          alt="프로필사진"
          $width="200px"
          $height="200px"
          $skeletonWidth="200px"
        />
        <Span $fontSize="2rem">안녕하세요! {name}님</Span>
      </Container>
      <MainHeading
        toPage="/CarWashUserCertificationPage"
        toEdit="/CarWashCertificationEdit"
        $fontSize="2rem"
        $margin="55px 30px 20px 30px"
      >
        {name}님의 세차 인증
      </MainHeading>
      <Container
        $flexWrap="wrap"
        $justifyContent="space-between"
        $margin="0 30px"
      >
        {certificationImages.map((image) => {
          return (
            <Image
              src={image.image}
              $width="175px"
              $skeletonWidth="175px"
              $margin="0 0 5px 0"
            />
          );
        })}
      </Container>
      <MainHeading
        toPage="/CarWashUserGoodsReviewPage"
        toEdit="/CarWashGoodsReviewEdit"
        $fontSize="2rem"
        $margin="55px 30px 20px 30px"
      >
        {name}님의 사용 후기
      </MainHeading>
      <Container
        $flexWrap="wrap"
        $justifyContent="space-between"
        $margin="0 30px 80px 30px"
      >
        {goodsReviews.map((image) => {
          return (
            <Image
              src={image.image}
              $width="175px"
              $skeletonWidth="175px"
              $margin="0 0 5px 0"
            />
          );
        })}
      </Container>
    </>
  );
};

export default CarWashProfile;
