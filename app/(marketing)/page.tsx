import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { PopularDishes } from "@/components/home/PopularDishes";
import { PromoBanner } from "@/components/home/PromoBanner";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <PopularDishes />
      <PromoBanner />
    </div>
  );
}
