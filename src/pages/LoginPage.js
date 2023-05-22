import { useContext, useEffect } from "react"
import LogoImg from "../assets/images/logo-new.png"
import "../styles/LoginPage.css"
import { UserContext } from "../contexts/UserContext"
import { setUserAction } from "../actions/userActions"
import { useNavigate } from "react-router-dom"
import { NotificationContext } from "../contexts/NotificationContext"
import { loginUser } from "../services/user/userService"
import { useLocation } from "react-router-dom/dist"

export const LoginPage = () => {
  const {userState, userDispatch} = useContext(UserContext)
  const { showNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin =  async (event) => {
    event.preventDefault()
    const creds = {
      email: event.target[0].value,
      password: event.target[1].value
    }
    if(!creds.email || !creds.password){
      return
    }
    try {
      const response = await loginUser(creds)
      userDispatch(setUserAction(response.data))
      localStorage.setItem("user", JSON.stringify(response.data))
      localStorage.setItem("cart", JSON.stringify(response.data.user.cart))
      showNotification(`Welcome, ${response?.data?.user?.name}.`, "success")
      navigate(location?.state?.from?.pathname || "/")
    }catch(error){
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
            type="text"
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
        <section className="login-page-register">
          <button className="login-register-btn">
            Register
          </button>
        </section>
      </section>
    </div>
  )
}