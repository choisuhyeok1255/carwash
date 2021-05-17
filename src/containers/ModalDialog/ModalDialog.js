import { Dialog, Modal } from "components";
import React from "react";

const ModalDialog = ({ setIsModalOpen, children }) => {
  const handlerModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal>
      <Dialog handlerModalClose={handlerModalClose}>{children}</Dialog>
    </Modal>
  );
};

export default ModalDialog;
