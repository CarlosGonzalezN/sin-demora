import Axios from "axios";

export async function getAllOrden(idMesa) {
  console.log(idMesa);
  try {
    const response = await Axios({
      headers: { "Content-Type": "application/json" },
      method: "GET",
      url: "http://localhost:44328/pedidos/detallepedido",
      params: idMesa,
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}
