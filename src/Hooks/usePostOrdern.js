export async function generateOrden(data) {
  try {
    const response = await Axios({
      method: "POST",
      url: "http://localhost:3005/usuariosweb/login",
      data: data,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
