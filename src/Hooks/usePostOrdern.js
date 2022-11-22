import Axios from "axios";
export async function generateOrden(data) {
  try {
    const response = await Axios({
      headers: { "Content-Type": "application/json" },
      method: "POST",
      url: "http://localhost:3005/Pedidos/AltaPedido",
      data: data,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
