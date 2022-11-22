import Axios from "axios";
export async function generateOrden(data) {
  const response = await fetch("http://localhost:44328/Pedidos/AltaPedido", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
/* Axios({
      headers: { "Content-Type": "application/json" },
      method: "POST",
      url: "http://localhost:44328/Pedidos/AltaPedido",
      data: data,
    });
    return response;
  } catch (e) {
    console.log(e);
  } */
