import {
  Container,
  Heading,
  LinkButton,
  LinkHeader,
  SVGIcon,
} from "components";
import React from "react";

const MainHeading = ({ to, $fontSize, $margin, children }) => {
  return (
    <Container
      $justifyContent="space-between"
      $alignItems="center"
      $margin={$margin}
    >
      <Heading as="h2" $fontSize={$fontSize}>
        <LinkHeader to={to}>{children}</LinkHeader>
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

export default MainHeading;
