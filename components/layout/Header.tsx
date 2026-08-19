import Link from "next/link";
import { Container } from "./Container";
import { ShoppingCart, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-h4 font-bold text-text-main">CampusFood</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden mobile:flex items-center space-x-8">
            <Link
              href="/restaurants"
              className="text-body text-text-secondary hover:text-text-main transition-colors duration-200"
            >
              Restaurants
            </Link>
            <Link
              href="/restaurants"
              className="text-body text-text-secondary hover:text-text-main transition-colors duration-200"
            >
              Categories
            </Link>
            <Link
              href="/restaurants"
              className="text-body text-text-secondary hover:text-text-main transition-colors duration-200"
            >
              Offers
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-surface rounded-md transition-colors duration-200">
              <Search className="w-5 h-5 text-text-secondary" />
            </button>

            <button className="p-2 hover:bg-surface rounded-md transition-colors duration-200 relative">
              <ShoppingCart className="w-5 h-5 text-text-secondary" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-caption rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            <button className="p-2 hover:bg-surface rounded-md transition-colors duration-200">
              <User className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
