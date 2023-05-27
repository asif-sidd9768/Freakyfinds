import axios from "axios";

export const addProductToCart = async (userId, product, token) => {
  const response = await axios.post(`/api/user/${userId}/cart`, product, {
    headers: {
      Authorization: `Bearer ${token}` //the token is a variable which holds the token
    }
  })
  console.log(response)
  return response
}

export const updateCartProduct = async(userId, cartItemId, token, quantityAction) => {
  const response = await axios.post(`/api/user/${userId}/cart/${cartItemId}`,{quantityAction}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  console.log(response)
  return response
}

export const deleteCartProduct = async (userId, cartItemId, token) => {
  console.log('jere')
  const response = await axios.post(`/api/user/${userId}/cart/${cartItemId}/delete`, {},{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response
}