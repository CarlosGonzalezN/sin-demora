import React, { useState } from "react";
import { Button, Typography, Stack, Alert } from "@mui/material";
import "../../App.css";

export default function Index() {
  const [visible, setVisible] = useState();
  const cuenta = localStorage.getItem("cuenta");

  const handleCardVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className="cardNotice">
        <Typography align="center">El total a abonar es:${cuenta} </Typography>

        <Typography>¿De que manera desea realizar el pago?</Typography>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button variant="outlined">Efectivo</Button>
          <Button onClick={handleCardVisible} variant="contained">
            Tarjeta
          </Button>
        </Stack>
      </div>
      {visible ? (
        <Alert severity="error">This is an error alert — check it out!</Alert>
      ) : (
        <Alert severity="warning">
          This is a warning alert — check it out!
        </Alert>
      )}
    </>
  );
}
