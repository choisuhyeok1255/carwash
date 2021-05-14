import { Container, Image } from "components";
import { MainHeading } from "containers";
import React from "react";
import siba from "assets/siba.jpg";

const CarWashCertification = () => {
  const images = [siba, siba, siba, siba];
  return (
    <>
      <MainHeading>세차 인증</MainHeading>
      <Container $flexWrap="wrap" $justifyContent="space-between">
        {images.map((image) => {
          return (
            <Image
              src={siba}
              alt="시바견"
              $width="170px"
              $margin="0 0 15px 0"
            ></Image>
          );
        })}
      </Container>
    </>
  );
};

export default CarWashCertification;
