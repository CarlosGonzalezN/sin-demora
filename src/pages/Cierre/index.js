import React, { useEffect, useState } from "react";
import { Button, Typography, Stack, Alert } from "@mui/material";
import "../../App.css";
import { getAllOrden } from "../../Hooks/useGetOrden";
import { payCuentaMesa } from "../../Hooks/usePostPay";

export default function Index() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
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
  const handleCardVisible1 = () => {
    setVisible1(true);
    setVisible2(false);
    payCuentaMesa(2);
  };
  const handleCardVisible2 = () => {
    setVisible2(true);
    setVisible1(false);
    payCuentaMesa(2);
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
          <Button onClick={handleCardVisible2} variant="outlined">
            Efectivo
          </Button>
          <Button onClick={handleCardVisible1} variant="contained">
            Tarjeta
          </Button>
        </Stack>
      </div>
      {visible1 ? (
        <Alert severity="error">
          {" "}
          El mozo se va a estar a acercando con la terminal de pagos
        </Alert>
      ) : (
        <></>
      )}
      {visible2 ? (
        <Alert severity="info">
          {" "}
          El mozo se va a estar a acercando a la mesa
        </Alert>
      ) : (
        <></>
      )}
    </>
  );
}
