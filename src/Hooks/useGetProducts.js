import Axios from "axios";

export async function getProducts() {
  try {
    const response = await Axios({
      headers: { "Content-Type": "application/json" },
      method: "GET",
      url: "https://localhost:44328/productos",
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}
