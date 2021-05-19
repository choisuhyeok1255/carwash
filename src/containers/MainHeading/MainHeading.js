import {
  Container,
  Heading,
  LinkButton,
  LinkHeader,
  SVGIcon,
} from "components";
import React from "react";
import { useSelector } from "react-redux";

const MainHeading = ({ toPage, toEdit, $fontSize, $margin, children }) => {
  const userData = useSelector((state) => state);
  const loginUser = userData.auth.currentUser;

  return (
    <Container
      $justifyContent="space-between"
      $alignItems="center"
      $margin={$margin}
    >
      <Heading as="h2" $fontSize={$fontSize}>
        <LinkHeader to={toPage}>{children}</LinkHeader>
      </Heading>
      {loginUser ? (
        <LinkButton
          to={toEdit}
          $width="20px"
          $height="20px"
          $backgroundColor="inherit"
        >
          <SVGIcon type="PlusButton" $width="20px" $height="20px" />
        </LinkButton>
      ) : null}
    </Container>
  );
};

export default MainHeading;
