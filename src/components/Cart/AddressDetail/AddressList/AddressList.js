import { useContext, useState } from "react"
import "./AddressList.css"
import { UserContext } from "../../../../contexts/UserContext"
import { CheckoutContext } from "../../../../contexts/CheckoutContext"
import { updateShippingAddressAction } from "../../../../actions/checkoutActions"
import { deleteAddressService } from "../../../../services/user/addressService"
import { setUserAction, setUserFailureAction, setUserRequestAction, updateAddressAction } from "../../../../actions/userActions"
import { NotificationContext } from "../../../../contexts/NotificationContext"
import { useLocation } from "react-router-dom"
import { AddressForm } from "../AddressForm/AddressForm"

export const AddressList = ({addressData}) => {
  const { userState, userDispatch } = useContext(UserContext)
  const { checkoutDispatch } = useContext(CheckoutContext)
  const {showNotification} = useContext(NotificationContext)
  const [ editingAddress, setEditingAddress ] = useState(false)
  const location = useLocation()

  const handleAddressChange = (event, addressData) => {
    checkoutDispatch(updateShippingAddressAction(addressData))
  }

  const handleAddressDelete = async (addressData) => {
    if(userState.isLoading){
      showNotification("Some work is in progress", "error")
      return
    }
    userDispatch(setUserRequestAction())
    try {
      const response = await deleteAddressService(userState.user.user.id, addressData, userState.user.token)
      userDispatch(setUserAction(response.data))
      showNotification("Address deleted!", "success")
    }catch(error){
      setUserFailureAction(error.response.data.message)
      showNotification(error.response.data.message, "error")
    }
  }

  const handleAddressEdit = (addressData) => {  
    userDispatch(updateAddressAction(addressData))
  }

  return (
    <div className="address-list-container">
      <p className="address-list-title">{userState?.user?.user?.addresses.length === 0 ? "Add an address" : "Select Address"}</p>
      {
        userState?.user?.user?.addresses?.map(address => 
          <div className="address-list-item" key={address.id}>
            <div className="address-list-item-btns-container">
              <button onClick={() => handleAddressEdit(address)} className="address-list-item-btn"><i className="fa-solid fa-pen-to-square"></i></button>
              <button onClick={() => handleAddressDelete(address)} disabled={userState.isLoading} className="address-list-item-btn"><i className="fa-solid fa-delete-left"></i></button>
            </div>
            {location.pathname !== "/profile" && <input onChange={(event) => handleAddressChange(event, address)} name="address" value={address.id} type="radio"/>}
            <>
              <p>{address.name} - {address.email}</p>
              <p>{address.line}</p>
              <p>{address.city}, {address.state}, {address.zip}</p>
              <p>Contact: {address.mobile}</p>
            </>
          </div>  
        )
      }
      { userState.editingAddress.isEditing && <AddressForm />}
      </div>
  )
}