import { Container, Heading, KaKaoMap } from "components";
import React from "react";

const SearchCarWash = () => {
  return (
    <Container $maxWidth="420px" $flexFlow="column" $margin="22px auto 0 auto">
      <Heading $margin="0 0 0 20px">세차장 검색</Heading>
      <Container $flexFlow="column" $width="100%">
        <KaKaoMap />
      </Container>
    </Container>
  );
};

export default SearchCarWash;
