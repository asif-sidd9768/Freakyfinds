import { createContext, useReducer } from "react";
import { initialStateNotification, notificationReducer } from "../reducers/notificationReducer";
import { removeNotificationAction, setNotificationAction } from "../actions/notificationActions";

export const NotificationContext = createContext()
export const NotificationProvider = ({children}) => {
  const [notificationState, notificationDispatch] = useReducer(notificationReducer, initialStateNotification)

  const showNotification = (content, type) => {
    notificationDispatch(setNotificationAction({content, type}))
    setTimeout(() => {
      notificationDispatch(removeNotificationAction())
    }, 2000)
  }

  return (
    <NotificationContext.Provider value={{notificationState, showNotification}}>
      {children}
    </NotificationContext.Provider>
  )
}