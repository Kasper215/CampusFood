'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, Clock, Flame, ChevronRight, Plus } from 'lucide-react'
import Image from 'next/image'

interface Dish {
  id: string
  name: string
  restaurant: string
  price: number
  image: string
  tags: string[]
  calories?: number
  cookTime?: string
}

const mockFavorites: Dish[] = [
  {
    id: '1',
    name: 'Цезарь с курицей',
    restaurant: 'Burger House',
    price: 450,
    image: '/images/dishes/caesar.jpg',
    tags: ['Популярное'],
    calories: 380,
    cookTime: '15 мин',
  },
  {
    id: '2',
    name: 'Лапша с курицей терияки',
    restaurant: 'Wok & Roll',
    price: 520,
    image: '/images/dishes/teriyaki.jpg',
    tags: ['Новинка'],
    calories: 420,
    cookTime: '20 мин',
  },
  {
    id: '3',
    name: 'Бургер с говядиной',
    restaurant: 'Burger House',
    price: 590,
    image: '/images/dishes/burger.jpg',
    tags: ['Хит'],
    calories: 650,
    cookTime: '18 мин',
  },
]

export function FavoritesList() {
  const [favorites, setFavorites] = React.useState(mockFavorites)

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter(d => d.id !== id))
  }

  if (favorites.length === 0) {
    return (
      <Card className="border-zinc-200">
        <CardContent className="py-12">
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary-500" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">Нет избранных блюд</h3>
            <p className="text-small text-zinc-500 mb-4">Добавляйте блюда в избранное, чтобы быстро их находить</p>
            <Button variant="primary">Перейти в меню</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-zinc-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Избранные блюда</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((dish) => (
            <div
              key={dish.id}
              className="group relative bg-white rounded-xl border border-zinc-100 overflow-hidden hover:border-primary-200 hover:shadow-md transition-all duration-200"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-zinc-100">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                  <span className="text-sm">Изображение</span>
                </div>
                
                {/* Favorite Button */}
                <button
                  onClick={() => removeFromFavorites(dish.id)}
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {dish.tags.map((tag) => (
                    <Badge key={tag} variant="success">{tag}</Badge>
                  ))}
                </div>
                
                <h3 className="font-semibold text-zinc-900 mb-1 line-clamp-1">{dish.name}</h3>
                <p className="text-xs text-zinc-500 mb-3">{dish.restaurant}</p>
                
                <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
                  {dish.calories && (
                    <div className="flex items-center gap-1">
                      <Flame className="h-3 w-3" />
                      <span>{dish.calories} ккал</span>
                    </div>
                  )}
                  {dish.cookTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{dish.cookTime}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-zinc-900">{dish.price} ₽</span>
                  <Button size="icon" variant="primary" className="h-9 w-9 rounded-full">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
