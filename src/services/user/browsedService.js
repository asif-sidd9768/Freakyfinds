import axios from "axios";
import { RESOURCE } from "../../utils/strings";

export const addItemToBrowsedService = async (token, userId, productId) => {
  const response = await axios.post(`${RESOURCE.API_URL}/api/user/${userId}/browsed-item/${productId}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  } )
  return response
}