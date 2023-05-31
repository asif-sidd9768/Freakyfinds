import { useContext, useEffect, useState } from "react"
import LogoImg from "../assets/images/logo-new.png"
import "../styles/LoginPage.css"
import { UserContext } from "../contexts/UserContext"
import { setUserAction, setUserFailureAction, setUserRequestAction } from "../actions/userActions"
import { useNavigate } from "react-router-dom"
import { NotificationContext } from "../contexts/NotificationContext"
import { loginUser } from "../services/user/userService"
import { useLocation } from "react-router-dom/dist"
import { setCartItemsAction } from "../actions/cartActions"
import { CartContext } from "../contexts/CartContext"
import { WishlistContext } from "../contexts/WishlistContext"
import { setWishlistAction } from "../actions/wishlistActions"
import { LoginForm } from "../components/User/LoginForm"
import { RegisterForm } from "../components/User/RegisterForm"

export const LoginPage = () => {
  const {userState, userDispatch} = useContext(UserContext)
  const { cartDispatch } = useContext(CartContext)
  const { showNotification } = useContext(NotificationContext)
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext)
  const [isRegister, setIsRegister] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin =  async (values) => {
    if(userState.isLoading){
      showNotification("Some work is in progress", "error")
      return
    }
    const creds = values
    userDispatch(setUserRequestAction())
    try {
      const response = await loginUser(creds)
      userDispatch(setUserAction(response.data))
      cartDispatch(setCartItemsAction(response?.data?.user?.cart))
      wishlistDispatch(setWishlistAction(response?.data?.user?.wishlist))
      localStorage.setItem("user", JSON.stringify(response.data))
      localStorage.setItem("cart", JSON.stringify(response.data.user.cart))
      localStorage.setItem("wishlist", JSON.stringify(response.data.user.wishlist))
      showNotification(`Welcome, ${response?.data?.user?.name}.`, "success")
      navigate(location?.state?.from?.pathname || "/")
    }catch(error){
      userDispatch(setUserFailureAction(error.response.data.message))
      showNotification(error.response.data.message, "error")
    }
  }

  const toggleRegister = () => {
    setIsRegister(!isRegister)
  }

  useEffect(() => {
    if(userState.user){
      navigate(location?.state?.from?.pathname || "/")
    }
  }, [])

  return (
      <div className="login-bg">
      <section className="login-container">
        <img src={LogoImg} className="login-logo" alt="" />
        {
          isRegister ? <RegisterForm /> : <LoginForm handleLogin={handleLogin} />
        }
        <div className="login-as-test-container">
          <button onClick={(event) => handleLogin({email:"asif@test1.com", password:"test"})} className="login-as-test-btn">Login as Test<i className="fa-solid fa-flask-vial"></i></button>
        </div>
        <section className="login-page-register">
          <button onClick={toggleRegister} className="login-register-btn">
            {isRegister ? "Back to Login" : "Register"}
          </button>
        </section>
      </section>
    </div>
  )
}