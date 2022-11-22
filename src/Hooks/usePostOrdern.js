import Axios from "axios";
export async function generateOrden(data) {
  try {
    const response = await Axios.get("http://localhost:44328/Alta", {
      params: {
        IdMesa: 1,
        nickName: "nahuel",
        IdProducto: 2,
        cantidad: 2,
      },
    });
    console.log(response);
    return response;
  } catch (error) {}
}
