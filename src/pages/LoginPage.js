import { useContext, useEffect } from "react"
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

export const LoginPage = () => {
  const {userState, userDispatch} = useContext(UserContext)
  const { cartDispatch } = useContext(CartContext)
  const { showNotification } = useContext(NotificationContext)
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin =  async (event, testCreds=null) => {
    event.preventDefault()
    const creds = testCreds ? testCreds : {
      email: event.target[0].value,
      password: event.target[1].value
    }
    if(!creds.email || !creds.password){
      return
    }
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
      userDispatch(setUserFailureAction(error))
      showNotification(error.message, "error")
    }
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
        <form onSubmit={handleLogin} className="login-form">
          <p className="login-user-id-label">Email</p>
          <input
            type="email"
            className="login-user-id-input"
            placeholder="Enter your email"
          />
          <br />
          <br />
          <p className="login-user-id-label">Password</p>
          <input
            type="password"
            className="login-user-id-input"
            placeholder="Enter your password"
          />
          <button type="submit" className="login-submit-btn">
            Login
          </button>
        </form>
        <div className="login-as-test-container">
          <button onClick={(event) => handleLogin(event, {email:"asif@test1.com", password:"test"})} className="login-as-test-btn">Login as Test<i class="fa-solid fa-flask-vial"></i></button>
        </div>
        <section className="login-page-register">
          <button className="login-register-btn">
            Register
          </button>
        </section>
      </section>
    </div>
  )
}