import { Button, Container, Heading, SVGIcon } from "components";
import { ModalDialog } from "containers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccessAction } from "store/modules/auth/authActionCreator";
import styled from "styled-components";
import { db } from "utils/firebaseConfig";
import { googleSignIn } from "utils/googleSignInOut";

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

const LoginModalDialog = ({ setIsModalOpen, loginUser, setLoginUser }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);

  const handlerGoogleLogin = async () => {
    const login = await googleSignIn();

    await db.collection("users").doc(login.user.uid).set({
      name: login.user.displayName,
      email: login.user.email,
      uid: login.user.uid,
    });

    setLoginUser({
      name: login.user.displayName,
      email: login.user.email,
      uid: login.user.uid,
    });
  };

  useEffect(() => {
    loginUser && dispatch(signInSuccessAction(loginUser));
    loginUser && setIsModalOpen(false);
  }, [dispatch, loginUser, setIsModalOpen]);

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
      </Container>
    </ModalDialog>
  );
};

export default LoginModalDialog;
