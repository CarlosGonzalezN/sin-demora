import React, { useEffect, useState } from "react";
import { Button, Typography, Stack, Alert } from "@mui/material";
import "../../App.css";
import { getAllOrden } from "../../Hooks/useGetOrden";

export default function Index() {
  const [visible, setVisible] = useState(false);
  const [cuentaTotal, setcuentaTotal] = useState();
  async function loadOrdens() {
    const pedido = await getAllOrden(2);
    if (pedido && pedido.status === 200) {
      setcuentaTotal(pedido.data.precioTotal);
    }
  }
  useEffect(() => {
    loadOrdens();
  }, []);
  console.log(cuentaTotal);
  const handleCardVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="cardNotice">
        <Typography align="center">
          El total a abonar es:${cuentaTotal}{" "}
        </Typography>

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
