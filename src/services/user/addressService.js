import axios from "axios";

export const addAddressService = async (userId, addressData, token) => {
  const response = await axios.post(`/api/user/${userId}/address`, addressData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response
}