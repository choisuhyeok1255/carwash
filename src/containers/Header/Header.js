import { Button, Heading } from "components";
import Container from "components/Container/Container";
import React from "react";

const Header = () => {
  return (
    <Container>
      <Container
        $width="420px"
        $margin="0 auto"
        $justifyContent="space-between"
      >
        <Button>출석</Button>
        <Heading>빛나는 하루</Heading>
        <Button>로그인</Button>
      </Container>
    </Container>
  );
};

export default Header;
