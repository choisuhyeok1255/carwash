import { Button, Container, Heading, SVGIcon } from "components";
import React from "react";

const MainHeading = ({ children }) => {
  return (
    <Container $justifyContent="space-between">
      <Heading as="h2">{children}</Heading>
      <Button>
        <SVGIcon type="PlusButton" $width="20px" $height="20px" />
      </Button>
    </Container>
  );
};

export default MainHeading;
