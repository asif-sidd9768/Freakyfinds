import axios from "axios"
import { RESOURCE } from "../../utils/strings"

export const loginUser = async (creds) => {
  const response = await axios.post(`${RESOURCE.API_URL}/api/user/login`, creds)
  return response
}

export const registerUser = async (userData) => {
  const response = await axios.post (`${RESOURCE.API_URL}/api/user/register`, userData)
  return response
}