import { Heading } from "components";
import { ModalDialog } from "containers";
import React from "react";

const LoginModalDialog = ({ setIsModalOpen }) => {
  return (
    <ModalDialog setIsModalOpen={setIsModalOpen}>
      <Heading>로그인</Heading>
    </ModalDialog>
  );
};

export default LoginModalDialog;
