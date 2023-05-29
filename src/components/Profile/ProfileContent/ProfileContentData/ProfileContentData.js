import { AddressList } from "../../../Cart/AddressDetail/AddressList/AddressList"
import { CartProduct } from "../../../Cart/CartProductsSection/CartProduct/CartProduct"
import { EmptyCart } from "../../../Cart/EmptyCart/EmptyCart"
import { ProfileOrders } from "../ProfileOrders/ProfileOrders"

export const ProfileContentData = ({data: {dataContent, title}}) => {
  return (
    <div>
      {
        title === "addresses" && <AddressList />
      }
      {
        title === "wishlist" && <>
          {
            dataContent.length > 0 ? dataContent.map(product => 
              <CartProduct key={product.id} product={product} quantity={1} id={4} />
            ) : <EmptyCart test="wishlist" />
          }
        </>
      }
      {
        title === "orders" && <ProfileOrders dataContent={dataContent} />
      }
    </div>
  )
}