import axios from "axios";
const urlBase = "https://api.punkapi.com/v2/beers";
 export const optenerBeers= async () => {
  try {
    const res = await axios.get(urlBase);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
