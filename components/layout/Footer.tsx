import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">😋</span>
              </div>
              <span className="text-h3 font-bold text-white">CampusFood</span>
            </Link>
            <p className="text-small text-zinc-400 leading-relaxed mb-6">
              Доставляем вкусную еду для студентов быстро и по доступным ценам.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">📷</a>
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">📘</a>
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">🐦</a>
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">📺</a>
            </div>
          </div>
          <div>
            <h4 className="text-body font-semibold mb-4">Компания</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">О нас</Link></li>
              <li><Link href="#careers" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">Карьера</Link></li>
              <li><Link href="#blog" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">Блог</Link></li>
              <li><Link href="#partners" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">Партнёрам</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-body font-semibold mb-4">Сервис</h4>
            <ul className="space-y-3">
              <li><Link href="/restaurants" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">Рестораны</Link></li>
              <li><Link href="/menu" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">Меню</Link></li>
              <li><Link href="#delivery" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">Доставка</Link></li>
              <li><Link href="#promos" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">Акции</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-body font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-3">
              <li><Link href="#help" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">Помощь</Link></li>
              <li><Link href="#faq" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link href="#contacts" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">Контакты</Link></li>
              <li><Link href="#privacy" className="text-small text-zinc-400 hover:text-primary-400 transition-colors">Конфиденциальность</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-body font-semibold mb-4">Приложение</h4>
            <p className="text-small text-zinc-400 mb-4">Скачайте наше приложение для быстрого заказа</p>
            <div className="space-y-3">
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-lg px-4 py-3 flex items-center space-x-3">
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <p className="text-caption text-zinc-400">Загрузите в</p>
                  <p className="text-small font-semibold">App Store</p>
                </div>
              </button>
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-lg px-4 py-3 flex items-center space-x-3">
                <span className="text-2xl">▶️</span>
                <div className="text-left">
                  <p className="text-caption text-zinc-400">Доступно в</p>
                  <p className="text-small font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-small text-zinc-400">Принимаем к оплате:</p>
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 bg-zinc-800 rounded text-small text-zinc-400">💳 Visa</div>
              <div className="px-4 py-2 bg-zinc-800 rounded text-small text-zinc-400">💳 Mastercard</div>
              <div className="px-4 py-2 bg-zinc-800 rounded text-small text-zinc-400">💳 Мир</div>
              <div className="px-4 py-2 bg-zinc-800 rounded text-small text-zinc-400">📱 Apple Pay</div>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption text-zinc-500">© 2024 CampusFood. Все права защищены.</p>
          <div className="flex items-center space-x-6">
            <Link href="#terms" className="text-caption text-zinc-500 hover:text-zinc-300 transition-colors">Условия использования</Link>
            <Link href="#privacy" className="text-caption text-zinc-500 hover:text-zinc-300 transition-colors">Политика конфиденциальности</Link>
            <Link href="#cookies" className="text-caption text-zinc-500 hover:text-zinc-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
