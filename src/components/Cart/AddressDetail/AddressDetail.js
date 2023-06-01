
import "./AddressDetail.css"
import { useContext, useState } from 'react';
import {UserContext} from "../../../contexts/UserContext"
import { AddressList } from './AddressList/AddressList';
import { AddressForm } from './AddressForm/AddressForm';
import { useLocation } from "react-router-dom";

export const AddressDetail = () => {
  const [ addNewAddress, setAddNewAddress ] = useState(false)
  const { userState } = useContext(UserContext)
  const location = useLocation()

  const toggleAddNewAddress = () => setAddNewAddress(!addNewAddress)

  return (
    <div className="address-detail-container">
      <p className="address-detail-title">{location.pathname === "/profile" ? "Addresses" : "Delivery Information"}</p>
      {
        userState?.user?.user?.addresses.length !== 0 && 
        <>
          <AddressList />
          <p className='address-detail-or-text'>{userState?.user?.user?.addresses.length !== 0 ? "OR" : "No addresses found"}</p>
        </>
      }
      <span className='address-detail-shipping-add-btn' onClick={toggleAddNewAddress}>
        { addNewAddress ? "Hide address add" : "Click to add new address" }
        <i className={`fa-solid fa-angle-${addNewAddress ? "up" : "down"}`}></i>
      </span>
      {
        addNewAddress && <AddressForm toggleAddNewAddress={toggleAddNewAddress} />
      }
    </div>
  )
}
