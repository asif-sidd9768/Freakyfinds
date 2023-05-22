import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App";
import { ProductContext, ProductProvider } from "./contexts/ProductContext";
import { CartContext, CartProvider } from "./contexts/CartContext";
import { WishlistContext, WishlistProvider } from "./contexts/WishlistContext";
import { NotificationContext, NotificationProvider } from "./contexts/NotificationContext";
import { UserContext, UserProvider } from "./contexts/UserContext";
import { CheckoutContext, CheckoutProvider } from "./contexts/CheckoutContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export {UserContext}
export {NotificationContext}
export {ProductContext}
export {CartContext}
export {WishlistContext}
export {CheckoutContext}

root.render(
  <StrictMode>
    <NotificationProvider>
      <UserProvider>
        <CartProvider>
          <CheckoutProvider>
            <WishlistProvider>
              <ProductProvider>
                <Router>
                  <App />
                </Router>
              </ProductProvider>
            </WishlistProvider>
          </CheckoutProvider>
        </CartProvider>
      </UserProvider>
    </NotificationProvider>
  </StrictMode>
);
