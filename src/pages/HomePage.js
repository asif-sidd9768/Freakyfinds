import { FeaturedProducts } from "../components/HomePage/FeaturedProducts/FeaturedProducts"
import { MainBanner } from "../components/HomePage/MainBanner/MainBanner"
import { MenuBar } from "../components/HomePage/MenuBar/MenuBar"
import { NewMainBanner } from "../components/HomePage/NewMainBanner/NewMainBanner"
import { NewProductCategories } from "../components/HomePage/NewProductCategories/NewProductCategories"
import { ShopFeatures } from "../components/HomePage/ShopFeatures/ShopFeatures"

export const HomePage = () => {
  return (
    <div>
      <NewMainBanner />
      {/* <MainBanner /> */}
      <FeaturedProducts />
      <ShopFeatures />
      <NewProductCategories />
    </div>
  )
}