import Axios from "axios";
export async function generateOrden(data) {
  try {
    const response = await Axios({
      method: "POST",
      url: "https://localhost:44328/Pedidos/AltaPedido",
      data: data,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
