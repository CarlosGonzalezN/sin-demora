import Axios from "axios";
export async function payCuenta(idMesa, nickName) {
  try {
    const response = await Axios.get(
      "https://localhost:44328/Pedidos/PagarPedido",
      {
        params: {
          IdMesa: idMesa,
          nickName: nickName,
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
      "https://localhost:44328/Pedidos/PagarPedido",
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
