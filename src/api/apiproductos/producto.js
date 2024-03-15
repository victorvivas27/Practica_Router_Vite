import axios from "axios";

export const optenerProductos = async () => {
  const baseUrl = "https://fakestoreapi.com/products";
  try {
    const response = await axios.get(baseUrl);
    return [...response.data];
  } catch (error) {
    console.error("Error producto", error);
  }
};


  export const obtenerDetallePorId = async (detalleId) => {
    const urlBase = `https://fakestoreapi.com/products/${detalleId}`;
    try {
        const respuesta = await axios.get(urlBase);
        return respuesta.data;
    } catch (error) {
        console.error('Error fetching product detail:', error);
    }
};
