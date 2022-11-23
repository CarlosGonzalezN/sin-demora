import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./pages/Menu/index";
import Pedido from "./pages/Pedido/index";
import Error from "./pages/Error/index";
import Register from "./pages/Register/index";
import Initial from "./pages/Initial/index";
import Cierre from "./pages/Cierre/index";
import Cuenta from "./pages/Cuenta";
import Pago from "./pages/Pago/index";
import Gracias from "./pages/Gracias";

function App() {
  return (
    <Routes>
      <Route path="/registrese" element={<Register />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/error" element={<Error />} />
      <Route path="/pedido" element={<Pedido />} />
      <Route path="/" element={<Initial />}></Route>
      <Route path="/cierre" element={<Cierre />}></Route>
      <Route path="/cuenta" element={<Cuenta />}></Route>
      <Route path="/pago/" element={<Pago />}></Route>
      <Route path="/gracias" element={<Gracias />}></Route>
    </Routes>
  );
}

export default App;
