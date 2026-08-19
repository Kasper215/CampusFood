'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { User, Package, Heart, Settings, LogOut, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'

const navigation = [
  { name: 'Профиль', href: '/profile', icon: User },
  { name: 'Мои заказы', href: '/profile/orders', icon: Package },
  { name: 'Избранное', href: '/profile/favorites', icon: Heart },
  { name: 'Настройки', href: '/profile/settings', icon: Settings },
]

export function ProfileSidebar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/profile' && pathname.startsWith(item.href))
            const Icon = item.icon
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-primary-500' : 'text-zinc-400'}`} />
                {item.name}
              </Link>
            )
          })}
          
          <div className="pt-4 mt-4 border-t border-zinc-200">
            <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-150">
              <LogOut className="h-5 w-5" />
              Выйти
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden sticky top-16 z-40 bg-white border-b border-zinc-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-zinc-900">Личный кабинет</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-white border-b border-zinc-200 shadow-lg py-2 px-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/profile' && pathname.startsWith(item.href))
              const Icon = item.icon
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-primary-500' : 'text-zinc-400'}`} />
                  {item.name}
                </Link>
              )
            })}
            
            <div className="pt-2 mt-2 border-t border-zinc-200">
              <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-150">
                <LogOut className="h-5 w-5" />
                Выйти
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
