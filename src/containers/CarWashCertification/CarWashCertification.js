import { Container, Image } from "components";
import { MainHeading } from "containers";
import React, { useEffect, useState } from "react";
import { db } from "utils/firebaseConfig";

const CarWashCertification = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    db.collection("certificationImage")
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
        toPage="/CarWashCertificationPage"
        toEdit="/CarWashCertificationEdit"
        $fontSize="2rem"
        $margin="55px 0 20px 0"
      >
        세차 인증
      </MainHeading>
      <Container $flexWrap="wrap" $justifyContent="space-between">
        {Images.map((image, index) => {
          if (index < 4) {
            return (
              <Container $justifyContent="space-between">
                <Image
                  src={image.image}
                  alt="사진"
                  key={index}
                  $width="170px"
                  $margin="0 0 15px 0"
                />
              </Container>
            );
          }
        })}
      </Container>
    </>
  );
};

export default CarWashCertification;
