"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MapPin, Clock, ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 badge-pill font-medium">
              <MapPin className="w-4 h-4" />
              <span>Доставка еды в твоём кампусе</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-hero md:text-hero leading-tight text-zinc-900">
              Вкусная еда.
              <br />
              Быстрая доставка.
              <br />
              <span className="text-primary-500">Для тебя.</span>
            </h1>

            {/* Description */}
            <p className="text-body text-zinc-500 max-w-md leading-relaxed">
              CampusFood — это удобный сервис доставки еды специально для
              студентов. Любимые блюда, быстрая доставка и доступные цены!
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary px-7 py-3.5 text-body flex items-center justify-center space-x-2">
                <span>Смотреть меню</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="btn-secondary px-7 py-3.5 text-body flex items-center justify-center space-x-2">
                <PlayCircle className="w-5 h-5" />
                <span>Как это работает?</span>
              </button>
            </div>

            {/* Delivery Card */}
            <div className="inline-flex items-center space-x-3 bg-white rounded-lg px-5 py-4 shadow-md">
              <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <p className="text-small text-zinc-500">Доставка от</p>
                <p className="text-h3 font-bold text-zinc-900">15 минут</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative w-full aspect-square md:aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop"
                  alt="Вкусная боул с курицей и авокадо"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-32 bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-24 bg-gradient-to-tr from-primary-300 to-primary-400 rounded-full opacity-20 blur-xl"></div>
            </div>

            {/* Floating Delivery Time Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-small text-zinc-500">Доставка от</p>
                  <p className="text-h3 font-bold text-zinc-900">15 минут</p>
                </div>
              </div>
            </div>

            {/* Floating Smoothie Glass (decorative) */}
            <div className="absolute -top-4 -right-4 w-16 h-24 bg-gradient-to-b from-green-300 to-green-500 rounded-full opacity-60 blur-sm hidden md:block"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
