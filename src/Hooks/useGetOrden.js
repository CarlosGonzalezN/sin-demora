import Axios from "axios";

export async function getAllOrden() {
  try {
    const response = await Axios({
      headers: { "Content-Type": "application/json" },
      method: "GET",
      url: "https://localhost:44328/pedidos",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
