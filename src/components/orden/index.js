import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material/";
import React, { useEffect, useState } from "react";
import { getAllOrden } from "../../Hooks/useGetOrden";
import "../../App.css";
import { useNavigate } from "react-router-dom";
export default function Index() {
  const [pedidos, setPedido] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const name = localStorage.getItem("orden");

  async function loadOrdens() {
    const pedido = await getAllOrden();
    if (pedido && pedido.status === 200) {
      setPedido(pedido.data.listaPedidos);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }
  const handlePay = (total) => {
    localStorage.setItem("cuenta", total);
    navigate("/pago/");
  };
  useEffect(() => {
    loadOrdens();
  }, []);
  console.log(pedidos);
  return (
    <>
      <Typography variant="h4" align="center">
        Detalle de pedidos
      </Typography>
      {isLoading ? (
        <CircularProgress sx={{ display: "flex", marginTop: 3 }} />
      ) : (
        <>
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
                        handlePay(precioTotalCliente);
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
      )}
    </>
  );
}
