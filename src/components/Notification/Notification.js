import { useContext } from "react"
import "./Notification.css"
import { NotificationContext } from "../../contexts/NotificationContext"

export const Notification = () => {
  const { notificationState } = useContext(NotificationContext)

  return (
    <div className="notification-stack">
      {notificationState.notifications.map(({content, type, id}) => (
        <Notif key={id} content={content} type={type} />
      ))}
    </div>
  )
}

const Notif = ({content, type}) => {
  return (
    <div className={`notification-container notification-${type}`}>
      <p className="notification-text">
      <span className={`notification-text-icon-${type}`}><i className={`fa-solid fa-${type==="success" ? "check" : "xmark"}`}></i></span>
      <span>{content}</span>
      </p>
    </div>
  )
}
