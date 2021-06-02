import { Container, Heading, KaKaoMap } from "components";
import React from "react";

const SearchCarWash = () => {
  return (
    <Container $flexFlow="column" $margin="22px 0 0 0">
      <Heading $margin="0 0 0 20px">세차장 검색</Heading>
      <KaKaoMap $width="100%" $height="300px" />
    </Container>
  );
};

export default SearchCarWash;
