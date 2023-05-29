export const initialStateUser = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false, 
  error: null
}

export const userReducer = (state, action) => {
  switch(action.type){
    case "SET_USER_REQUEST":
      return {...state, isLoading: true}
    case "SET_USER":
      return {...state, user: action.payload, isLoading: false}
    case "SET_USER_FAILURE":
      return {...state, error: action.payload, isLoading: false}
    case "SUCCESS_CHECKOUT_ORDER_UPDATE":
      const updatedUser = {...state.user, orders: [...state?.user?.orders, action.payload]}
      return {...state, user: updatedUser}
    case "UPDATE_BROWSED_ITEMS":
      const updatedUserAfterBrowsed = {...state.user, user: {...state.user.user, browsedItems: action.payload}}
      return {...state, user: updatedUserAfterBrowsed}
    case "REMOVE_USER":
      return {...state, user: null}
    case "REGISTER_USER_REQUEST":
      return {...state, isLoading: true}
    case "REGISTER_USER_FAILURE":
      return {...state, isLoading: false, error:action.payload}
  }
}