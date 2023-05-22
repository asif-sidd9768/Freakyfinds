export const setNotificationAction = (notifData) => ({
  type:"SET_NOTIFICATION",
  payload: notifData
})

export const removeNotificationAction = () => ({
  type: "REMOVE_NOTIFICATION"
})