import {
  Container,
  Heading,
  LinkButton,
  LinkHeader,
  SVGIcon,
} from "components";
import React from "react";

const MainHeading = ({ to, children }) => {
  return (
    <Container $justifyContent="space-between" $alignItems="center">
      <Heading as="h2">
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
