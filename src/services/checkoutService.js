import axios from "axios";
import { RESOURCE } from "../utils/strings";

export const createOrderService = async (token, checkoutData) => {
  const response = await axios.post(`${RESOURCE.API_URL}/api/checkout/orders`, {checkoutData}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response
}

export const loadScript = async () => {
  const response = await axios.get("https://checkout.razorpay.com/v1/checkout.js")
  return response
}

export const successOrderService = async (token, checkoutData) => {
  const response = await axios.post(`${RESOURCE.API_URL}/api/checkout/success`, {checkoutData},{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  console.log(response)
  return response
}

export const codOrderService = async (token, checkoutData) => {
  const response = await axios.post(`${RESOURCE.API_URL}/api/checkout/cod-order`, {checkoutData}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response
}