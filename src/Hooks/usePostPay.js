import Axios from "axios";
export async function payCuenta(data) {
  try {
    const response = await Axios.get(
      "http://localhost:44328/Pedidos/PagarPedido",
      {
        params: {
          IdMesa: data.idMesa,
          nickName: data.nickName,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function payCuentaMesa(data) {
  try {
    const response = await Axios.get(
      "http://localhost:44328/Pedidos/PagarPedido",
      {
        params: {
          IdMesa: data,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {}
}
