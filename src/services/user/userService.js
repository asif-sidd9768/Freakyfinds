import axios from "axios"

export const loginUser = async (creds) => {
  const response = await axios.post(`/api/user/login`, creds)
  return response
}