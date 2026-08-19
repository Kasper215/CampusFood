'use client'

import React from 'react'
import { ProfileSidebar } from '@/components/profile/ProfileSidebar'
import { FavoritesList } from '@/components/profile/FavoritesList'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, TrendingUp } from 'lucide-react'

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container-main py-8">
        <div className="flex gap-8">
          <ProfileSidebar />
          
          <main className="flex-1 min-w-0 space-y-6">
            <div className="mb-8">
              <h1 className="text-h2 font-bold text-zinc-900">Избранное</h1>
              <p className="text-body text-zinc-500 mt-1">Ваши любимые блюда</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="border-zinc-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center">
                      <Heart className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zinc-900">3</div>
                      <div className="text-xs text-zinc-500">Избранных блюд</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-zinc-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zinc-900">1 560 ₽</div>
                      <div className="text-xs text-zinc-500">Средняя цена</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <FavoritesList />
          </main>
        </div>
      </div>
    </div>
  )
}
