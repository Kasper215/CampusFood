'use client'

import React from 'react'
import { ProfileSidebar } from '@/components/profile/ProfileSidebar'
import { ProfileCard } from '@/components/profile/ProfileCard'
import { OrdersList } from '@/components/profile/OrdersList'
import { Card, CardContent } from '@/components/ui/card'
import { Package, Heart, Clock, TrendingUp } from 'lucide-react'

export default function ProfilePage() {
  const stats = [
    { label: 'Заказов', value: '24', icon: Package, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Избранное', value: '12', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
    { label: 'Среднее время', value: '18 мин', icon: Clock, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Бонусы', value: '450 ₽', icon: TrendingUp, color: 'text-primary-500', bg: 'bg-primary-50' },
  ]

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container-main py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <ProfileSidebar />
          
          {/* Main Content */}
          <main className="flex-1 min-w-0 space-y-6">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-h2 font-bold text-zinc-900">Личный кабинет</h1>
              <p className="text-body text-zinc-500 mt-1">Управляйте профилем и заказами</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.label} className="border-zinc-200">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${stat.color}`} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-zinc-900">{stat.value}</div>
                          <div className="text-xs text-zinc-500">{stat.label}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Profile Card */}
            <ProfileCard />

            {/* Orders List */}
            <OrdersList />
          </main>
        </div>
      </div>
    </div>
  )
}
