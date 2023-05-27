import { useContext } from "react";
import { Routes, Route } from "react-router-dom"

import { ProductContext } from "./contexts/ProductContext";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/HomePage";

import "./styles.css";
import { ProductList } from "./pages/ProductList";
import { Footer } from "./components/Footer/Footer";
import { ProductDetail } from "./pages/ProductDetail";
import { CartPage } from "./pages/CartPage";
import { MenuBar } from "./components/HomePage/MenuBar/MenuBar";
import { LoginPage } from "./pages/LoginPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { ReturnPolicy } from "./pages/ReturnPolicy";
import { Notification } from "./components/Notification/Notification";
import { NotificationContext } from "./contexts/NotificationContext";
import { AuthenticatedRoutes } from "./components/AuthenticatedRoutes/AuthenticatedRoutes";
import { UserContext } from "./contexts/UserContext";
import { CheckoutSuccess } from "./components/Cart/Checkout/CheckoutSuccess";
import { WishlistPage } from "./pages/WishlistPage";
import { ProfilePage } from "./pages/ProfilePage";

export default function App() {
  const { productState } = useContext(ProductContext)
  const { notificationState } = useContext(NotificationContext)
  const { userState } = useContext(UserContext)
  return (
    <div className="App">
      {notificationState.content && <Notification {...notificationState} />}
      <div>
        <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductList />} />
          {
            [...productState.categories].map((route, index) => 
              <Route key={index} path={`/shop/${route}`} element={<ProductList />} />  
            )
          }
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<AuthenticatedRoutes isSignedIn={userState.user}><ProfilePage /></AuthenticatedRoutes>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/success" element={<AuthenticatedRoutes isSignedIn={userState.user}> <CheckoutSuccess /></AuthenticatedRoutes>} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/wishlist" element={<AuthenticatedRoutes isSignedIn={userState.user}><WishlistPage /></AuthenticatedRoutes>} />
          <Route path="/cart/:userId" element={<AuthenticatedRoutes isSignedIn={userState.user}><CartPage /></AuthenticatedRoutes>} />
        </Routes>
      </div>
      <div>
        <MenuBar />
        <Footer />
      </div>
    </div>
  );
}