import { Button, Heading } from "components";
import Container from "components/Container/Container";
import React from "react";

const Header = () => {
  return (
    <Container $width="100%" $justifyContent="space-between">
      <Button>출석</Button>
      <Heading>빛나는 하루</Heading>
      <Button>로그인</Button>
    </Container>
  );
};

export default Header;
