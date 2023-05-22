// import "./AddressDetail.css"

// export const AddressDetail = () => {

//   const handleAddressSubmit = (event) => {
//     event.preventDefault()
//     const name = event.target[0].value;
//     const mobile = event.target[1].value;
//     const email = event.target[2].value;
//     const city = event.target[3].value;
//     const state = event.target[4].value;
//     const zip = event.target[5].value;
//     const address = event.target[6].value;

//     const formData = { name, mobile, email, city, state, zip, address };
//     console.log(formData);
//   }

//   return (
//     <div className="address-detail-container">
//       <p className="address-detail-title">Delivery Information</p>
//       <form onSubmit={handleAddressSubmit} className="address-detail-fields">
//         <div className="address-detail-name">
//           <p className="address-detail-label">Name</p>
//           <input
//             type="text"
//             className="address-detail-input"
//             placeholder="Freaky Finds"
//           />
//         </div>
//         <div className="address-detail-mobile">
//           <p className="address-detail-label">Mobile Number</p>
//           <input
//             type="text"
//             className="address-detail-input"
//             placeholder="+91-9876543210"
//           />
//         </div>
//         <div className="address-detail-email">
//           <p className="address-detail-label">Email</p>
//           <input
//             type="text"
//             className="address-detail-input"
//             placeholder="finds@freakyfinds.com"
//           />
//         </div>
//         <div className="address-detail-city">
//           <p className="address-detail-label">City</p>
//           <input
//             type="text"
//             className="address-detail-input"
//             placeholder="Mumbai"
//           />
//         </div>
//         <div className="address-detail-state">
//           <p className="address-detail-label">State</p>
//           <input
//             type="text"
//             className="address-detail-input"
//             placeholder="Maharashtra"
//           />
//         </div>
//         <div className="address-detail-zip">
//           <p className="address-detail-label">Pincode</p>
//           <input
//             type="text"
//             className="address-detail-input"
//             placeholder="400000"
//           />
//         </div>
//         <div className="address-detail-line">
//           <p className="address-detail-label">Address</p>
//           <input
//             type="text"
//             className="address-detail-input"
//             placeholder="101, FreakyFinds Apartments"
//           />
//         </div>
//         <button type="submit" className="address-detail-add-btn">ADD ADDRESS</button>
//       </form>
//     </div>
//   )
// }

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./AddressDetail.css"
import { addAddressService } from '../../../services/user/addressService';
import { useContext, useState } from 'react';
import {UserContext} from "../../../contexts/UserContext"
import { NotificationContext } from "../../../contexts/NotificationContext"
import { AddressList } from './AddressList/AddressList';
import { AddressForm } from './AddressForm/AddressForm';

export const AddressDetail = () => {
  const [ addNewAddress, setAddNewAddress ] = useState(false)

  return (
    <div className="address-detail-container">
      <p className="address-detail-title">Delivery Information</p>
      <AddressList />
      <p className='address-detail-or-text'>OR</p>
      <span className='address-detail-shipping-add-btn' onClick={() => setAddNewAddress(!addNewAddress)}>
        { addNewAddress ? "Hide address add" : "Click to add new address" }
        <i className={`fa-solid fa-angle-${addNewAddress ? "up" : "down"}`}></i>
      </span>
      {
        addNewAddress && <AddressForm />
      }
    </div>
  )
}
