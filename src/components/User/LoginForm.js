export const LoginForm = ({handleLogin}) => {
  return (
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
  )
}