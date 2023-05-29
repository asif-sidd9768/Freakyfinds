import axios from "axios";
import { RESOURCE } from "../../utils/strings";

export const addProductToCart = async (userId, product, token) => {
  const response = await axios.post(`${RESOURCE.API_URL}/api/user/${userId}/cart`, product, {
    headers: {
      Authorization: `Bearer ${token}` //the token is a variable which holds the token
    }
  })
  return response
}

export const updateCartProduct = async(userId, cartItemId, token, quantityAction) => {
  const response = await axios.post(`${RESOURCE.API_URL}/api/user/${userId}/cart/${cartItemId}`,{quantityAction}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response
}

export const deleteCartProduct = async (userId, cartItemId, token) => {
  const response = await axios.post(`${RESOURCE.API_URL}/api/user/${userId}/cart/${cartItemId}/delete`, {},{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response
}