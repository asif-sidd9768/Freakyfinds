import "./ShopFeatures.css"

export const ShopFeatures = () => {
  return (
    <div className="shop-features-main-container">
    <div className="shop-features-container">
      <p className="shop-features-title">Stay In Trend With <span className="shop-feature-brand-text">FreakyFinds</span></p>
      <div className="shop-features-grid">
        <div className="shop-feature shop-feature-latest">
          <span className="shop-feature-icon"><i className="fa-solid fa-box"></i></span>
          <p className="shop-feature-name">Latest Styles</p>
          <p className="shop-feature-description">
            Our designs follow the latest fashio styles to help you stay updated with new trends.
          </p>
        </div>
        <div className="shop-feature shop-feature-latest">
          <span className="shop-feature-icon"><i className="fa-solid fa-square-check"></i></span>
          <p className="shop-feature-name">Best Prices</p>
          <p className="shop-feature-description">
            Enjoy the best prices for high quality products.
          </p>
        </div>
        <div className="shop-feature shop-feature-latest">
          <span className="shop-feature-icon"><i className="fa-solid fa-truck-fast"></i></span>
          <p className="shop-feature-name">Free Shipping</p>
          <p className="shop-feature-description">
            We provide free shipping worldwide. You can order from anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}