import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { registerUserFailureAction, registerUserRequestAction, setUserAction } from '../../actions/userActions';
import { registerUser } from '../../services/user/userService';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import { WishlistContext } from '../../contexts/WishlistContext';
import { NotificationContext } from '../../contexts/NotificationContext';
import { setCartItemsAction } from '../../actions/cartActions';
import { setWishlistAction } from '../../actions/wishlistActions';
import { useNavigate } from 'react-router-dom';

import "../../styles/LoginPage.css"

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const RegisterForm = () => {
  const { userState, userDispatch } = useContext(UserContext)
  const { cartDispatch } = useContext(CartContext)
  const { wishlistDispatch } = useContext(WishlistContext)
  const { showNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  
  const handleUserRegister = async (values, {resetForm}) => {
    if(userState.isLoading){
      return
    }
    userDispatch(registerUserRequestAction())
    try {
      const response = await registerUser(values)
      userDispatch(setUserAction(response.data))
      cartDispatch(setCartItemsAction(response?.data?.user?.cart))
      wishlistDispatch(setWishlistAction(response?.data?.user?.wishlist))
      localStorage.setItem("user", JSON.stringify(response.data))
      localStorage.setItem("cart", JSON.stringify(response.data.user.cart))
      localStorage.setItem("wishlist", JSON.stringify(response.data.user.wishlist))
      showNotification(`Welcome, ${response?.data?.user?.name}.`, "success")
      navigate(location?.state?.from?.pathname || "/")
      resetForm()
    }catch(error){
      userDispatch(registerUserFailureAction(error.response.data.message))
      showNotification(error.response.data.message, "error")
      resetForm()
    }
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={handleUserRegister}
    >
      {({ errors, touched }) => (
        <Form className="login-form">
          <div>
            <p className="login-user-id-label">Name</p>
            <Field
              type="text"
              name="name"
              className="login-user-id-input"
              placeholder="Freaky Finds"
            />
            <ErrorMessage className="error-message" name="name" component="div" />
          </div>
          <div>
            <p className="login-user-id-label">Email</p>
            <Field
              type="text"
              name="email"
              className="login-user-id-input"
              placeholder="finds@freakyfinds.com"
            />
            <ErrorMessage className="error-message" name="email" component="div" />
          </div>
          <div >
            <p className="login-user-id-label">Password</p>
            <Field
              type="password"
              name="password"
              className="login-user-id-input"
              placeholder="******"
            />
            <ErrorMessage className="error-message" name="password" component="div" />
          </div>
          <div>
            <p className="login-user-id-label">Confrim Password</p>
            <Field
              type="password"
              name="confirmPassword"
              className="login-user-id-input"
              placeholder="******"
            />
            <ErrorMessage className="error-message" name="confirmPassword" component="div" />
          </div>
          <button type="submit" className="login-submit-btn">Register</button>
        </Form>
      )}
    </Formik>
  )
}