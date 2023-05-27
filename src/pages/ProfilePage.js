import { useState } from "react"
import { ProfileContent } from "../components/Profile/ProfileContent/ProfileContent"
import { ProfileMenu } from "../components/Profile/ProfileMenu/ProfileMenu"
import { ProfileUser } from "../components/Profile/ProfileUser/ProfileUser"
import "../styles/ProfilePage.css"

export const ProfilePage = () => {
  const [profileMenuBtn, setProfileMenuBtn] = useState("profile") 
  const handleMenuChange = (menuItem) => {
    setProfileMenuBtn(menuItem)
  }
  return (
    <div className="profile-page-container">
      <ProfileMenu profileMenuBtn={profileMenuBtn} handleMenuChange={handleMenuChange} />
      <ProfileContent profileMenuBtn={profileMenuBtn} />
    </div>
  )
}