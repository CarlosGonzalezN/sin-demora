import Axios from "axios";

export async function getAllOrden(idMesa) {
  try {
    const response = await Axios.get(
      "https://localhost:44328/Pedidos/DetallePedido",
      {
        params: {
          IdMesa: idMesa,
        },
      }
    );
    return response;
  } catch (error) {}
}
