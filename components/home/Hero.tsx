"use client";

import Image from "next/image";
import { AddressSearch } from "./AddressSearch";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="relative py-20 mobile:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 mobile:grid-cols-2 gap-12 mobile:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-hero-mobile mobile:text-hero font-bold text-text-main leading-tight">
              Good food.
              <br />
              Good mood.
              <br />
              Delivered.
            </h1>

            <p className="text-body mobile:text-[18px] text-text-secondary max-w-120 leading-relaxed">
              Your favorite meals from the best local restaurants, delivered to
              your door.
            </p>

            <div className="space-y-6">
              <AddressSearch />

              <button className="btn-primary px-8 py-3.5 text-[16px] rounded-md w-full mobile:w-auto">
                Explore restaurants
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl mobile:rounded-[32px] overflow-hidden shadow-default">
              <div className="relative w-full h-100 mobile:h-[580px]">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop"
                  alt="Delicious food"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute bottom-6 left-6 bg-surface rounded-lg p-4 shadow-hover">
                <div className="flex items-center space-x-2">
                  <span className="text-[20px]">⭐</span>
                  <div>
                    <p className="text-small font-semibold text-text-main">
                      4.9
                    </p>
                    <p className="text-caption text-text-secondary">
                      Burger House
                    </p>
                  </div>
                </div>
                <p className="text-caption text-text-secondary mt-1">
                  20–30 min
                </p>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute top-6 right-6 bg-primary text-white rounded-full px-4 py-2 shadow-hover">
                <span className="text-small font-semibold"> Popular</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
