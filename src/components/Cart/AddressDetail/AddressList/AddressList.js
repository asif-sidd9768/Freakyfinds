import { useContext } from "react"
import "./AddressList.css"
import { UserContext } from "../../../../contexts/UserContext"
import { CheckoutContext } from "../../../../contexts/CheckoutContext"
import { updateShippingAddressAction } from "../../../../actions/checkoutActions"

export const AddressList = () => {
  const { userState } = useContext(UserContext)
  const { checkoutDispatch } = useContext(CheckoutContext)

  const handleAddressChange = (event, addressData) => {
    checkoutDispatch(updateShippingAddressAction(addressData))
  }

  return (
    <div className="address-list-container">
      <p className="address-list-title">Select Address</p>
      {
        userState.user.user.addresses.map(address => 
          <div className="address-list-item" key={address.id}>
            <input onChange={(event) => handleAddressChange(event, address)} name="address" value={address.id} type="radio"/>
            <>
              <p>{address.name} - {address.email}</p>
              <p>{address.line}</p>
              <p>{address.city}, {address.state}, {address.zip}</p>
            </>
          </div>  
        )
      }
      </div>
  )
}