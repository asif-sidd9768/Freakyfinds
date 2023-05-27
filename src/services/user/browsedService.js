import axios from "axios";

export const addItemToBrowsedService = async (token, userId, productId) => {
  const response = await axios.post(`/api/user/${userId}/browsed-item/${productId}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  } )
  return response
}