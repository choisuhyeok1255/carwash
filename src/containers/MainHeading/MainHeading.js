import {
  Container,
  Heading,
  LinkButton,
  LinkHeader,
  SVGIcon,
} from "components";
import React from "react";

const MainHeading = ({ toPage, toEdit, $fontSize, $margin, children }) => {
  return (
    <Container
      $justifyContent="space-between"
      $alignItems="center"
      $margin={$margin}
    >
      <Heading as="h2" $fontSize={$fontSize}>
        <LinkHeader to={toPage}>{children}</LinkHeader>
      </Heading>
      <LinkButton
        to={toEdit}
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
