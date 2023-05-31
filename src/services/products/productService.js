import axios from "axios"
import { RESOURCE } from "../../utils/strings"

// const BASE_URL = 'http://localhost:3000'
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${RESOURCE.API_URL}/api/product/all-products`)
    return response
  }catch(error){
  }
}