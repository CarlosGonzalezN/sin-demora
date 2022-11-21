import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllOrden } from "../../Hooks/useGetOrden";
import "../../App.css";
export default function Index() {
  const [pedidos, setPedido] = useState([]);

  const name = localStorage.getItem("orden");
  /* const newOrden = { iMesa: 1, nickName }; */
  async function loadOrdens() {
    const pedido = await getAllOrden();
    setPedido(pedido.data.listaPedidos);
  }
  useEffect(() => {
    loadOrdens();
  }, []);

  return (
    <>
      <Typography variant="h4" align="center">
        Detalle de pedidos
      </Typography>
      {pedidos.map(
        ({ $id, NickName, listaPedidosPersona, precioTotalCliente }) => (
          <div className="container">
            <Card key={$id} className="card">
              <Box>
                <Typography>{NickName.toUpperCase()}</Typography>
              </Box>
              <CardContent>
                {listaPedidosPersona.map((p) => (
                  <>
                    {" "}
                    <lu key={p.$id}>
                      <li>{p.Descripcion}</li>
                    </lu>
                  </>
                ))}
                <Typography>{precioTotalCliente}</Typography>
              </CardContent>

              {name.toLowerCase() == NickName.toLowerCase() ? (
                <Button
                  onClick={() => {
                    alert("pagado");
                  }}
                >
                  Pagar mi cuenta
                </Button>
              ) : (
                "-"
              )}
            </Card>
          </div>
        )
      )}
    </>
  );
}
