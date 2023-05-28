import "../styles/AuctionPage.css"
import auctionImage from "../assets/images/auction.png"
export const AuctionPage = () => {
  return (
    <div className="auction-bg">
      <div className="auction-container"> 
        <div>
          <div className="auction-image-container"><img src={auctionImage} /></div>
          <p className="auction-coming-soon-text">Coming Soon</p>
          <p className="auction-secondary-text">Creating something <span className="auction-freaky-text">Freaky</span>.</p>
        </div>
      </div>
    </div>
  )
}