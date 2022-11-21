import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { generateOrden } from "../../Hooks/usePostOrdern";

export default function Index({ onClose, id }) {
  console.log(id);
  const [cantidad, setCantidad] = useState(0);
  const handleCantidad = () => {
    const result = cantidad + 1;
    setCantidad(result);
  };
  const handleCantidadRemove = () => {
    if (cantidad < 1) {
      return setCantidad(0);
    }
    setCantidad(cantidad - 1);
  };
  const nickName = localStorage.getItem("orden");
  const newOrden = { iMesa: 1, nickName, idProducto: id, cantidad };
  const pedir = () => {
    if (cantidad > 0) {
      const response = generateOrden(newOrden);

      onClose(true);
    }
    onClose(true);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 300,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
        Elija la cantidad
      </Typography>
      <Box>
        <Button onClick={handleCantidadRemove}>-</Button>
        <Typography>{cantidad}</Typography>
        <Button onClick={handleCantidad}>+</Button>
      </Box>
      <Button variant="outlined" color="error" size="small" onClick={onClose}>
        Cancelar
      </Button>
      <Button variant="contained" sx={{ marginLeft: 3 }} onClick={pedir}>
        Pedir
      </Button>
    </Box>
  );
}
