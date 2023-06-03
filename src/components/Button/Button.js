import "./Button.css"

export const Button = ({type, text, onClick, size}) => {
  return (
    <button disabled={type === "out-of-stock"} onClick={onClick} className={`btn btn-${type} btn-${size}`}>
      {text}
    </button>
  )
}

export const WishlistButton = ({type, onClick, isAbsolute}) => {
  return (
    <span onClick={onClick} className={`btn-wishlist ${isAbsolute ? "btn-wishlist-absolute" : ""} btn-wishlist-${type}`}>
      <i className="fa-solid fa-heart"></i>
    </span>
  )
}