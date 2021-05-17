import { Button, Container, Heading, SVGIcon } from "components";
import { ModalDialog } from "containers";
import React from "react";
import styled from "styled-components";
import { googleSignIn } from "utils";

const LoginButton = styled(Button)`
  width: 226px;
  height: 48px;
  border-radius: 20px;
  margin: 0 0 20px 0;
  padding: 0 0 0 74px;
  display: flex;
  align-items: center;
`;

const LoginSpan = styled.span`
  margin-left: 16px;
`;

const LoginModalDialog = ({ setIsModalOpen }) => {
  const handlerGoogleLogin = () => {
    googleSignIn()
      .then((response) => response.user)
      .then((user) =>
        console.log(`${user.displayName}님 로그인 인증에 성공했습니다.`)
      )
      .catch((error) => console.error(error.message));
  };

  return (
    <ModalDialog setIsModalOpen={setIsModalOpen}>
      <Container $flexFlow="column" $alignItems="center">
        <Heading $color="#ffffff" $fontSize="2.5rem" $margin="30px 0 50px 0 ">
          로그인
        </Heading>
        <LoginButton onClick={handlerGoogleLogin}>
          <SVGIcon type="Google" $width="20px" $height="20px"></SVGIcon>
          <LoginSpan>Google</LoginSpan>
        </LoginButton>
        <LoginButton>
          <SVGIcon type="Kakao" $width="20px" $height="20px"></SVGIcon>
          <LoginSpan>Kakao</LoginSpan>
        </LoginButton>
        <LoginButton>
          <SVGIcon type="Naver" $width="20px" $height="20px"></SVGIcon>
          <LoginSpan>Naver</LoginSpan>
        </LoginButton>
      </Container>
    </ModalDialog>
  );
};

export default LoginModalDialog;
