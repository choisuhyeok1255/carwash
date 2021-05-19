import { Container, Image, Span } from "components";
import { SubHeading } from "containers";
import React, { useEffect, useState } from "react";
import { db } from "utils/firebaseConfig";

const CarWashCertificationPage = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    db.collection("certificationImage")
      .get()
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((doc) => {
          temp.push({
            image: doc.data().image,
            name: doc.data().name,
            uploadDate: doc.data().uploadDate,
          });
        });
        setImages(temp);
      });
  }, []);

  return (
    <>
      <SubHeading to="CarWashCertificationEdit" $margin="22px 0 32px 0">
        세차 인증
      </SubHeading>
      {Images.map((image, index) => {
        return (
          <Container $flexFlow="column" $margin="20px 0 15px 0">
            <Span $fontSize="1.5rem" $margin="0 0 10px 30px">
              ID: {image.name}
            </Span>
            <Span $margin="0 0 10px 30px">{image.uploadDate}</Span>
            <Image src={image.image} alt="사진" $width="100%" />
          </Container>
        );
      })}
    </>
  );
};

export default CarWashCertificationPage;
