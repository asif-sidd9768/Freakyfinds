export const getFilteredProducts = (productState) => {
  const { products, filters } = productState;

  return products
    .filter(({ category, sale, title, rating }) => {
      // Category filter
      if (filters.category !== 'all' && category.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }
      // Sale filter
      if (filters.sale === 'yes' && !sale.onSale) {
        return false;
      }
      // Search filter
      if (filters.searchParam && !title.toLowerCase().includes(filters.searchParam.toLowerCase())) {
        return false;
      }
      // Rating filter
      if(filters.rating && rating.rate < filters.rating){
        return false
      }
      return true;
    })
    .sort((prodA, prodB) => {
      // Price sort
      if (filters.price) {
        const priceDiff = filters.price === 'lowToHigh' ? prodA.price - prodB.price : prodB.price - prodA.price;
        if (priceDiff !== 0) {
          return priceDiff;
        }
      }
    });
};