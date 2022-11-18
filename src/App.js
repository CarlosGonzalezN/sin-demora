import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Menu, Pedido, Error, Register, Initial } from "./pages/index";

function App() {
  return (
    <Routes>
      <Route path="/registrese" element={<Register />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/error" element={<Error />} />
      <Route path="/pedido" element={<Pedido />} />
      <Route path="/" element={<Initial />}></Route>
    </Routes>
  );
}

export default App;
