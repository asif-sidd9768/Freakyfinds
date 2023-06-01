import { NavLink } from "react-router-dom"
import "./ProfileOrders.css"
import { Fragment } from "react"

export const ProfileOrders = ({dataContent}) => {

  return (
    <div className="profile-orders-container">
      {
        ["Order ID", "Order Date", "Status", "Total"].map((orderHeader, index) => 
          <div className="profile-orders-header" key={index}>
            {orderHeader}
          </div>
        )
      }
      {
        dataContent.map(order => 
          <Fragment key={order.id}>
            <div className="profile-orders-cell">
              {order?.paymentDetail?.orderCreationId}
            </div>  
              <div className="profile-orders-cell">
              {new Date(order?.orderDate).toLocaleDateString()}
            </div>  
            <div className={`profile-orders-cell profile-orders-status-${order.status}`}>
              {order?.status}
            </div>  
            <div className="profile-orders-cell">
              ₹{order?.totalCost}
            </div>  
          </Fragment>
        )
      }
      {/* <div className="profile-orders-header">
        Order ID
      </div>
      <div>
        Order Date
      </div>
      <div>
        Status
      </div>
      <div>
        Total
      </div> */}
    </div>
  )
}