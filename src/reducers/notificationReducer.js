export const initialStateNotification = {
  content: null,
  type: null
}

export const notificationReducer = (state, action) => {
  switch(action.type){
    case "SET_NOTIFICATION": 
      return {...state, content: action.payload.content, type: action.payload.type}
    case "REMOVE_NOTIFICATION":
      return {...state, content: null, type: null}
  }
}