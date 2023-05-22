import { FeaturedProducts } from "../components/HomePage/FeaturedProducts/FeaturedProducts"
import { MainBanner } from "../components/HomePage/MainBanner/MainBanner"
import { MenuBar } from "../components/HomePage/MenuBar/MenuBar"
import { ProductCategories } from "../components/HomePage/ProductCategories/ProductCategories"
import { ShopFeatures } from "../components/HomePage/ShopFeatures/ShopFeatures"

export const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <FeaturedProducts />
      <ShopFeatures />
      <ProductCategories />
    </div>
  )
}