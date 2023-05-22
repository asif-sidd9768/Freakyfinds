import { useContext } from "react"
import "./Notification.css"
import { NotificationContext } from "../../contexts/NotificationContext"

export const Notification = ({content, type}) => {
  return (
    <div className={`notification-container notification-${type==="success" ? "success" : "error"}`}>
      <p className="notification-text">
        <span className={`notification-text-icon-${type==="success" ? "success" : "error"}`}><i className={`fa-solid fa-${type==="success" ? "check" : "xmark"}`}></i></span>
        <span>{content}</span>
      </p>
    </div>
  )
}