import { Button, Heading, LinkButton, LinkHeader, Portal } from "components";
import Container from "components/Container/Container";
import { LoginModalDialog } from "containers";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { googleSignOut } from "utils/googleSignInOut";
import { signOutSuccessAction } from "store/modules/auth/authActionCreator";
import { color } from "styles/color";

const Header = ({ history }) => {
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
    history.push("/");
  };

  return (
    <Container $width="100%" $height="50px">
      <Container
        $background={color.themeMain}
        $maxWidth="420px"
        $width="100%"
        $justifyContent="space-between"
        $padding="0 20px"
        $margin="0 auto"
      >
        <Heading $fontSize="2.5rem" $lineHeight="50px">
          <LinkHeader to="/" $color={color.textWhite}>
            Shiningday
          </LinkHeader>
        </Heading>
        {loginUser ? (
          <Container $alignItems="center">
            <LinkButton
              to="/CarWashProfile"
              $margin="0 15px 0 0"
              $color={color.textWhite}
              $fontSize="1.4rem"
            >
              마이페이지
            </LinkButton>
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
