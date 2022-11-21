import Axios from "axios";

export async function getCategory() {
  try {
    const response = await Axios({
      headers: { "Content-Type": "application/json" },
      method: "GET",
      url: "http://localhost:3005/categoria",
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}