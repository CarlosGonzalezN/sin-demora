import React from "react";
import { Box, Button } from "@mui/material";
import "../../App.css";
export default function Index() {
  const dataCategoria = ["Minutas", "Carnes", "Pastas", "bebidas", "Postres"];
  return (
    <div className="App-header">
      {dataCategoria.map((dataCategoria) => (
        <Button key={dataCategoria} size="small" variant="text">
          {" "}
          {dataCategoria}
        </Button>
      ))}
    </div>
  );
}
