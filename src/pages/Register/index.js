import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function Index() {
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNombre(e.target.value);
  };
  const handleSumbit = (e) => {
    const orden = { mesa: "01", nombre: nombre };
    localStorage.setItem("orden", JSON.stringify(orden));
    navigate("/menu");
  };

  return (
    <div className="container">
      <div className="main">
        <Box component="form" noValidate autoComplete="off" sx={{}}>
          <div>
            <Typography variant="h6" gutterBottom>
              Registrese
            </Typography>
            <br />

            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              name="nombre"
              value={nombre}
              onChange={handleChange}
            />
            <br />
            <Button
              size="small"
              variant="contained"
              sx={{ marginTop: 3, marginLeft: 15 }}
              onClick={handleSumbit}
            >
              Registrar
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
