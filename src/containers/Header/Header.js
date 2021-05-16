import { Button, Heading, LinkHeader, Portal } from "components";
import Container from "components/Container/Container";
import { LoginModalDialog } from "containers";
import React, { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlerModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <Container>
      <Container
        $width="420px"
        $margin="0 auto"
        $justifyContent="space-between"
      >
        <Button $backgroundColor="inherit">출석</Button>
        <Heading>
          <LinkHeader to="/">빛나는 하루</LinkHeader>
        </Heading>
        <Button $backgroundColor="inherit" onClick={handlerModalOpen}>
          로그인
        </Button>
        {isModalOpen ? (
          <>
            <Portal>
              <LoginModalDialog
                setIsModalOpen={setIsModalOpen}
              ></LoginModalDialog>
            </Portal>
          </>
        ) : null}
      </Container>
    </Container>
  );
};

export default Header;
