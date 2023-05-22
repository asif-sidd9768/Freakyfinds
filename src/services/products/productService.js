import axios from "axios"

// const BASE_URL = 'http://localhost:3000'
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`/api/product/all-products`)
    return response
  }catch(error){
    console.error(error)
  }
}