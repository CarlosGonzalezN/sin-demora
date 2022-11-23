import React from "react";
import { Alert } from "@mui/material";
import "../../App.css";
import LogoHome from "../../images/LogoHome.png";
export default function Index() {
  return (
    <>
      <Alert severity="success">
        Su pago fue realizado con exito— Gracias por elegirnos!
      </Alert>
      <div className="initial">
        <img src={LogoHome} alt="test" width={500} height={500} />
      </div>
    </>
  );
}
