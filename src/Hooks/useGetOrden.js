import Axios from "axios";

export async function getAllOrden(idMesa) {
  try {
    const response = await Axios.get(
      "http://localhost:44328/Pedidos/DetallePedido",
      {
        params: {
          IdMesa: idMesa,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {}
}
