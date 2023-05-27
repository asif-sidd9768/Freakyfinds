import axios from "axios";
import { RESOURCE } from "../../utils/strings";

export const addAddressService = async (userId, addressData, token) => {
  const response = await axios.post(`${RESOURCE.API_URL}/api/user/${userId}/address`, addressData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response
}

export const deleteAddressService = async (userId, addressData, token) => {
  const response = await axios.post(`${RESOURCE.API_URL}/api/user/${userId}/address/${addressData.id}/delete`, addressData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response
}