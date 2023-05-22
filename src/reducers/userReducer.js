export const initialStateUser = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false, 
  error: null
}

export const userReducer = (state, action) => {
  switch(action.type){
    case "SET_USER":
      return {...state, user: action.payload}
  }
}