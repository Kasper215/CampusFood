"use client";

import Link from "next/link";
import { Container } from "./Container";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">😋</span>
            </div>
            <span className="text-h3 font-bold text-primary-500">
              CampusFood
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/restaurants"
              className="text-body text-zinc-500 hover:text-primary-500 transition-colors duration-200"
            >
              Меню
            </Link>
            <Link
              href="#how-it-works"
              className="text-body text-zinc-500 hover:text-primary-500 transition-colors duration-200"
            >
              Как это работает
            </Link>
            <Link
              href="#delivery"
              className="text-body text-zinc-500 hover:text-primary-500 transition-colors duration-200"
            >
              Доставка
            </Link>
            <Link
              href="#about"
              className="text-body text-zinc-500 hover:text-primary-500 transition-colors duration-200"
            >
              О нас
            </Link>
            <Link
              href="#contacts"
              className="text-body text-zinc-500 hover:text-primary-500 transition-colors duration-200"
            >
              Контакты
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block btn-secondary px-6 py-2.5 text-body">
              Войти
            </button>

            <button className="btn-primary px-6 py-2.5 text-body">
              Стать клиентом
            </button>

            <button className="p-2 hover:bg-zinc-100 rounded-md transition-colors duration-200 relative">
              <ShoppingCart className="w-5 h-5 text-zinc-500" />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-caption rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-zinc-100 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-zinc-700" />
              ) : (
                <Menu className="w-6 h-6 text-zinc-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/restaurants"
                className="text-body text-zinc-500 hover:text-primary-500"
              >
                Меню
              </Link>
              <Link
                href="#how-it-works"
                className="text-body text-zinc-500 hover:text-primary-500"
              >
                Как это работает
              </Link>
              <Link
                href="#delivery"
                className="text-body text-zinc-500 hover:text-primary-500"
              >
                Доставка
              </Link>
              <Link
                href="#about"
                className="text-body text-zinc-500 hover:text-primary-500"
              >
                О нас
              </Link>
              <Link
                href="#contacts"
                className="text-body text-zinc-500 hover:text-primary-500"
              >
                Контакты
              </Link>
              <button className="btn-secondary w-full py-2.5">Войти</button>
              <button className="btn-primary w-full py-2.5">
                Стать клиентом
              </button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
