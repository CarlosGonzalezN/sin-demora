import Axios from "axios";
export async function generateOrden(data) {
  try {
    const response = await Axios.get("http://localhost:44328/Alta", {
      params: {
        IdMesa: data.id,
        nickName: data.nickName,
        IdProducto: data.idProducto,
        cantidad: data.cantidad,
      },
    });
    console.log(response);
    return response;
  } catch (error) {}
}
