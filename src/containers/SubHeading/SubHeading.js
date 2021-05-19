import { Container, Heading, LinkButton, SVGIcon } from "components";
import React from "react";

const SubHeading = ({ to, $fontWeight, $margin, children }) => {
  return (
    <Container
      $margin={$margin}
      $justifyContent="space-between"
      $alignItems="center"
    >
      <Heading as="h2" $fontSize="2rem" $fontWeight={$fontWeight}>
        {children}
      </Heading>
      <LinkButton
        to={to}
        $width="20px"
        $height="20px"
        $backgroundColor="inherit"
      >
        <SVGIcon type="PlusButton" $width="20px" $height="20px" />
      </LinkButton>
    </Container>
  );
};

export default SubHeading;
