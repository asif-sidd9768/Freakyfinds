export const DetailSectionStarRating = ({product}) => {
  return (
    <>
    {
      Array.from({length: 5}, (_, i) => i + 1).map(i => {
        const rating = product.rating.rate;
        let starClass;
      
        if (i <= Math.floor(rating)) {
          // Whole star
          starClass = "fa-solid fa-star detail-section-rating-checked";
        } else if (i - 0.5 <= rating) {
          // Half star
          starClass = "fa-solid fa-star-half detail-section-rating-checked";
        } 
        return (
          <span key={i}>
            <i className={starClass}></i>
          </span>
        );
      })
    }
    </>
  )
}