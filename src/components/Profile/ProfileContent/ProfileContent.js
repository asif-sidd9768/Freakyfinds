import { useContext } from "react"
import "./ProfileContent.css"
import { UserContext } from "../../../contexts/UserContext"
import { ProfileBrowsedContent } from "./ProfileBrowsedContent/ProfileBrowsedContent"
import { ProfileContentData } from "./ProfileContentData/ProfileContentData"

export const ProfileContent = ({profileMenuBtn}) => {
  const { userState } = useContext(UserContext)
  return (
    <div className="profile-content-container">
      {profileMenuBtn === "profile" && <ProfileBrowsedContent />}
      {profileMenuBtn === "orders" && <ProfileContentData data={{dataContent: userState?.user?.user?.orders, title:"orders"}} />}
      {profileMenuBtn === "wishlist" && <ProfileContentData data={{dataContent: userState?.user?.user?.wishlist, title:"wishlist"}} />}
      {profileMenuBtn === "addresses" && <ProfileContentData data={{dataContent: userState?.user?.user?.addresses, title:"addresses"}} />}
    </div>
  )
}