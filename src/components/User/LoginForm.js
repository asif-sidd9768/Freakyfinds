import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = ({handleLogin}) => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ errors, touched }) => (
        <Form className="login-form">
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
              autoComplete="off"
            />
            <ErrorMessage className="error-message" name="password" component="div" />
          </div>
          <button type="submit" className="login-submit-btn">Login</button>
        </Form>
      )}
    </Formik>
    // <form onSubmit={handleLogin} className="login-form">
    //   <p className="login-user-id-label">Email</p>
    //   <input
    //     type="email"
    //     className="login-user-id-input"
    //     placeholder="Enter your email"
    //   />
    //   <br />
    //   <br />
    //   <p className="login-user-id-label">Password</p>
    //   <input
    //     type="password"
    //     className="login-user-id-input"
    //     placeholder="Enter your password"
    //   />
    //   <button type="submit" className="login-submit-btn">
    //     Login
    //   </button>
    // </form>
  )
}