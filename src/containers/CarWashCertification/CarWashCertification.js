import { Image, UlContainer } from "components";
import { MainHeading } from "containers";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getCertifiactionImage from "utils/getItems/getCertifiactionImage";

const CarWashCertification = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    getCertifiactionImage(setImages);
  }, []);

  return (
    <>
      <MainHeading
        toPage="/CarWashCertificationPage"
        toEdit="/CarWashCertificationEdit"
        $fontSize="2rem"
        $margin="25px 0 20px 0"
      >
        세차 인증
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
                <Link to="/CarWashCertificationPage">
                  <Image
                    src={image.image}
                    alt="사진"
                    $width="170px"
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

export default CarWashCertification;
