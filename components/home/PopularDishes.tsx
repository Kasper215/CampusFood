"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Heart, Plus, ArrowRight } from "lucide-react";
import { useState } from "react";

const dishes = [
  {
    id: 1,
    name: "Пицца Маргарита",
    price: 450,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=400&fit=crop",
    tags: ["Популярное"],
  },
  {
    id: 2,
    name: "Цезарь с курицей",
    price: 380,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54dd1d9?w=400&h=400&fit=crop",
    tags: ["Хит"],
  },
  {
    id: 3,
    name: "Лапша с курицей терияки",
    price: 420,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop",
    tags: ["Новинка"],
  },
  {
    id: 4,
    name: "Бургер с говядиной",
    price: 520,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c51cd?w=400&h=400&fit=crop",
    tags: ["Популярное"],
  },
  {
    id: 5,
    name: "Крем-суп грибной",
    price: 290,
    image: "https://images.unsplash.com/photo-1547592166-23acbe346499?w=400&h=400&fit=crop",
    tags: ["Вегетарианское"],
  },
];

export function PopularDishes() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-zinc-50">
      <Container>
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-h2 text-zinc-900">Популярные блюда</h2>
          <button className="hidden md:flex items-center space-x-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors">
            <span>Смотреть всё меню</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {dishes.map((dish) => (
            <div key={dish.id} className="card-default bg-white overflow-hidden">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(dish.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(dish.id)
                        ? "fill-red-500 text-red-500"
                        : "text-zinc-400"
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Title */}
                <h3 className="text-body font-semibold text-zinc-900 mb-2">
                  {dish.name}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {dish.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-primary-50 text-primary-600 badge-pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price Row */}
                <div className="flex items-center justify-between">
                  <span className="text-h3 font-bold text-zinc-900">
                    {dish.price} ₽
                  </span>

                  <button className="w-9 h-9 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="md:hidden mt-8 text-center">
          <button className="inline-flex items-center space-x-2 text-primary-500 font-semibold">
            <span>Смотреть всё меню</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
