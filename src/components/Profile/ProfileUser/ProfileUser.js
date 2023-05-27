import { useContext } from "react"
import { UserContext } from "../../../contexts/UserContext"

import userAvatar from "../../../assets/images/user-avatar.png"
import "./ProfileUser.css"

export const ProfileUser = () => {
  const { userState } = useContext(UserContext)
  return (
    <div className="profile-user-container">
      <div className="profile-user-avatar-container">
        <img className="profile-user-avatar-img" src={userAvatar} />
        <p className="profile-user-name-text">Welcome, <span className="profile-user-name">{userState?.user?.user?.name}</span></p>
      </div>
    </div>
  )
}