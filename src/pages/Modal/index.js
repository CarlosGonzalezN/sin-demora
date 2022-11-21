import React, { useState } from "react";
import { Modal } from "@mui/material";
import { ModalProduct } from "../../components";

export default function Index(props) {
  const key = props;
  const [openModal, setOpenModal] = useState(true);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  console.log(key);
  return (
    <>
      {" "}
      <Modal open={openModal} onClose={handleModal}>
        <ModalProduct onClose={handleModal} />
      </Modal>
    </>
  );
}
