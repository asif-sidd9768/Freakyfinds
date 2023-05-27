
import "./AddressDetail.css"
import { useContext, useState } from 'react';
import {UserContext} from "../../../contexts/UserContext"
import { AddressList } from './AddressList/AddressList';
import { AddressForm } from './AddressForm/AddressForm';

export const AddressDetail = () => {
  const [ addNewAddress, setAddNewAddress ] = useState(false)
  const { userState } = useContext(UserContext)

  return (
    <div className="address-detail-container">
      <p className="address-detail-title">Delivery Information</p>
      {
        userState?.user?.user?.addresses.length !== 0 && 
        <>
          <AddressList />
          <p className='address-detail-or-text'>{userState?.user?.user?.addresses.length !== 0 ? "OR" : "No addresses found"}</p>
        </>
      }
      <span className='address-detail-shipping-add-btn' onClick={() => setAddNewAddress(prevAdd => !prevAdd)}>
        { addNewAddress ? "Hide address add" : "Click to add new address" }
        <i className={`fa-solid fa-angle-${addNewAddress ? "up" : "down"}`}></i>
      </span>
      {
        addNewAddress && <AddressForm />
      }
    </div>
  )
}
