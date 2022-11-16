import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";

export default function Index({ onClose }) {
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
      <Button variant="contained" sx={{ marginLeft: 3 }}>
        Pedir
      </Button>
    </Box>
  );
}
