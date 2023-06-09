export const getFilteredProducts = (productState) => {
  const { products, filters } = productState;

  return products
    .filter(({ category, sale, price, rating, stockQuantity }) => {
      // Category filter
      if (filters.category !== 'all' && category.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }
      // Sale filter
      if (filters.sale === 'yes' && !sale.onSale) {
        return false;
      }
      // Stock filter
      if (!filters.inStock && stockQuantity < 1) {
        return false;
      }
      // Rating filter
      if(filters.rating && rating.rate < filters.rating){
        return false
      }

      // Price Range Filter
      if(filters.priceRange && price > filters.priceRange){
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