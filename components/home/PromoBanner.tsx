"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="bg-primary-50 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16">
              {/* Welcome Badge */}
              <span
                className="inline-block text-primary-600 font-bold mb-4"
                style={{
                  fontFamily: "cursive",
                  fontSize: "24px",
                  transform: "rotate(-5deg)",
                }}
              >
                Welcome!
              </span>

              {/* Title */}
              <h2 className="text-h1 md:text-hero font-bold text-zinc-900 leading-tight mb-2">
                Скидка 15%
              </h2>

              {/* Subtitle */}
              <h3 className="text-h2 font-semibold text-zinc-900 mb-4">
                на первый заказ!
              </h3>

              {/* Description */}
              <p className="text-body text-zinc-500 leading-relaxed mb-6 max-w-md">
                Зарегистрируйся и получи скидку 15% на первый заказ в
                CampusFood.
              </p>

              {/* CTA Button */}
              <button className="btn-primary px-7 py-3.5 text-body flex items-center space-x-2">
                <span>Зарегистрироваться</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Images */}
            <div className="relative h-64 lg:h-auto min-h-[400px] p-8">
              <div className="relative w-full h-full">
                {/* Delivery Bag */}
                <div className="absolute top-0 right-0 w-40 h-48 bg-primary-500 rounded-2xl shadow-xl flex items-center justify-center transform rotate-6">
                  <div className="text-white text-center">
                    <span className="text-4xl">😋</span>
                    <p className="text-sm font-bold mt-2">CampusFood</p>
                  </div>
                </div>

                {/* Coffee Cup */}
                <div className="absolute bottom-20 left-8 w-24 h-28 bg-white rounded-xl shadow-lg flex items-center justify-center transform -rotate-3">
                  <div className="text-primary-500 text-center">
                    <span className="text-3xl">☕</span>
                  </div>
                </div>

                {/* Food Bowl */}
                <div className="absolute bottom-0 right-12 w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop"
                    alt="Healthy bowl"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-12 w-16 h-16 bg-primary-200 rounded-full opacity-50 blur-lg"></div>
                <div className="absolute bottom-32 right-0 w-20 h-20 bg-primary-300 rounded-full opacity-30 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
