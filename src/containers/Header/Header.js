import { Button, Heading, LinkHeader, Portal } from "components";
import Container from "components/Container/Container";
import { LoginModalDialog } from "containers";
import React, { useState } from "react";
import { googleSignOut } from "utils/googleSignInOut";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginUser, setLoginUser] = useState(null);

  const handlerModalOpen = () => {
    setIsModalOpen(true);
  };

  const handlerGoogleLogOut = () => {
    googleSignOut();
    setLoginUser(null);
  };

  return (
    <Container>
      <Container
        $width="420px"
        $margin="15px auto 0 auto"
        $justifyContent="space-between"
      >
        <Button $backgroundColor="inherit">출석</Button>
        <Heading $fontSize="3rem">
          <LinkHeader to="/">빛나는 하루</LinkHeader>
        </Heading>
        {loginUser ? (
          <Button $backgroundColor="inherit" onClick={handlerGoogleLogOut}>
            로그아웃
          </Button>
        ) : (
          <Button $backgroundColor="inherit" onClick={handlerModalOpen}>
            로그인
          </Button>
        )}
        {isModalOpen ? (
          <>
            <Portal>
              <LoginModalDialog
                setIsModalOpen={setIsModalOpen}
                loginUser={loginUser}
                setLoginUser={setLoginUser}
              />
            </Portal>
          </>
        ) : null}
      </Container>
    </Container>
  );
};

export default Header;
