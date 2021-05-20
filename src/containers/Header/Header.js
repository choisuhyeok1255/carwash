import { Button, Heading, LinkHeader, Portal } from "components";
import Container from "components/Container/Container";
import { LoginModalDialog } from "containers";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { googleSignOut } from "utils/googleSignInOut";
import { signOutSuccessAction } from "store/modules/auth/authActionCreator";
import { color } from "styles/color";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const dispatch = useDispatch();

  const handlerModalOpen = () => {
    setIsModalOpen(true);
  };

  const handlerLogOut = () => {
    googleSignOut();
    setLoginUser(null);
    dispatch(signOutSuccessAction(loginUser));
  };

  return (
    <Container $background="black" $height="50px">
      <Container
        $width="420px"
        $justifyContent="space-between"
        $padding="0 30px"
      >
        <Heading $fontSize="2.5rem" $lineHeight="50px">
          <LinkHeader to="/" $color={color.textWhite}>
            Shiningday
          </LinkHeader>
        </Heading>
        {loginUser ? (
          <Container>
            <Button
              $backgroundColor="inherit"
              $margin="0 15px 0 0"
              $color={color.textWhite}
            >
              출석
            </Button>
            <Button
              $backgroundColor="inherit"
              $color={color.textWhite}
              onClick={handlerLogOut}
            >
              로그아웃
            </Button>
          </Container>
        ) : (
          <Button
            $backgroundColor="inherit"
            onClick={handlerModalOpen}
            $color={color.textWhite}
          >
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
