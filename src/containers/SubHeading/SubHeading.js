import { Container, Heading, LinkButton, SVGIcon } from "components";
import React from "react";
import { useSelector } from "react-redux";

const SubHeading = ({ to, $fontWeight, $margin, children }) => {
  const userData = useSelector((state) => state);
  const loginUser = userData.auth.currentUser;

  return (
    <Container
      $margin={$margin}
      $justifyContent="space-between"
      $alignItems="center"
    >
      <Heading as="h2" $fontSize="2rem" $fontWeight={$fontWeight}>
        {children}
      </Heading>
      {loginUser ? (
        <LinkButton
          to={to}
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

export default SubHeading;
