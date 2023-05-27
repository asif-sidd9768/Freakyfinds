import axios from "axios";

export const addProductToWishlistService = async (token, userId, product ) => {
  const response = await axios.post(`/api/user/${userId}/wishlist/${product.id}`, product,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response
}

export const deleteProductFromWishlistService = async(token, userId, productId) => {
  const response = await axios.post(`/api/user/${userId}/wishlist/${productId}/delete`, {},{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response
}