import BlogSection from "@/components/BlogComp/BlogSection";
import BrandsGrid from "@/components/Brands/BrandsGrid";
import AllCategories from "@/components/Categories/AllCategories";
import DynamicLayoutMain from "@/components/DynamicLayout/DynamicLayoutMain";
import ProductGrid from "@/components/GridLayout/ProductGrid";
import BannerWrapper from "@/components/HomeHeroBanner/BannerWrapper";
import React from "react";

export const revalidate = 60;

const Home = () => {
  return (
    <div className="bg-templateBackground">
      <BannerWrapper />
      <AllCategories />
      <ProductGrid text="Our Best Selling" limit={30} />
      <BrandsGrid />
      <DynamicLayoutMain />
      <BlogSection />
    </div>
  );
};

export default Home;
