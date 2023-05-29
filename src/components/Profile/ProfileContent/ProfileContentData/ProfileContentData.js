import { NavLink } from "react-router-dom"
import { AddressDetail } from "../../../Cart/AddressDetail/AddressDetail"
import { AddressList } from "../../../Cart/AddressDetail/AddressList/AddressList"
import { CartProduct } from "../../../Cart/CartProductsSection/CartProduct/CartProduct"
import { EmptyCart } from "../../../Cart/EmptyCart/EmptyCart"
import { ProfileOrders } from "../ProfileOrders/ProfileOrders"
import { EmptyList } from "../../EmptyList/EmptyList"
import { RESOURCE } from "../../../../utils/strings"

export const ProfileContentData = ({data: {dataContent, title}}) => {
  return (
    <div>
      {
        title === "addresses" && <AddressDetail />
      }
      {
        title === "wishlist" && <>
          {
            dataContent.length > 0 ? dataContent.map(product => 
              <CartProduct key={product.id} product={product} quantity={1} id={4} />
            ) : <EmptyList text={RESOURCE.EMPTY_PROFILE_WISHLIST} />
          }
        </>
      }
      {
        title === "orders" && <>
        {
          dataContent.length > 0 ? <ProfileOrders dataContent={dataContent} /> : <EmptyList text={RESOURCE.EMPTY_PROFILE_ORDERS} />
        }
        </> 
      }
    </div>
  )
}