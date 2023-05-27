import { useContext, useState } from "react"
import { UserContext } from "../../../contexts/UserContext"
import "./ProfieMenu.css"
import { ProfileUser } from "../ProfileUser/ProfileUser"

export const ProfileMenu = ({handleMenuChange, profileMenuBtn}) => {
  const {userState} = useContext(UserContext)
  return (
    <div className="profile-menu-container">
      <>
        <ProfileUser />
      </>
      <div className="profile-menu-btns-container">
        <button onClick={() => handleMenuChange("profile")} className={`profile-menu-btn ${profileMenuBtn === "profile" && "profile-menu-btn-active"}`}>
          <i className="fa-solid fa-user-tie"></i> <span>Profile</span>
        </button>
        <button onClick={() => handleMenuChange("orders")} className={`profile-menu-btn ${profileMenuBtn === "orders" && "profile-menu-btn-active"}`} value="orders">
          <i className="fa-solid fa-box"></i> <span>Orders</span>
        </button>
        <button onClick={() => handleMenuChange("wishlist")} className={`profile-menu-btn ${profileMenuBtn === "wishlist" && "profile-menu-btn-active"}`} value="wishlist">
          <i className="fa-solid fa-heart"></i> <span>Wishlist</span>
        </button>
        <button onClick={() => handleMenuChange("addresses")} className={`profile-menu-btn ${profileMenuBtn === "addresses" && "profile-menu-btn-active"}`} value="addresses">
          <i className="fa-solid fa-address-book"></i> <span>Addresses</span>
        </button>
        
      </div>
    </div>
  )
}