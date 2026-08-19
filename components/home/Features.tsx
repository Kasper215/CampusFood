"use client";

import { Leaf, Zap, Wallet, Smile } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Свежие продукты",
    description: "Готовим только из качественных продуктов",
  },
  {
    icon: Zap,
    title: "Быстрая доставка",
    description: "Доставим твой заказ от 15 минут",
  },
  {
    icon: Wallet,
    title: "Выгодные цены",
    description: "Студенческие цены и регулярные акции",
  },
  {
    icon: Smile,
    title: "Для студентов",
    description: "Создано студентами для студентов",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-default p-6 md:p-8 border border-zinc-100"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-500" />
              </div>

              {/* Title */}
              <h3 className="text-h3 font-semibold text-zinc-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-small text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
