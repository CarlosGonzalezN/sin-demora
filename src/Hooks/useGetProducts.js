import Axios from "axios";

export async function getProducts() {
  try {
    const response = await Axios({
      headers: { "Content-Type": "application/json" },
      method: "GET",
      url: "http://localhost:44328/Inicio/obtenerProductos",
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}
