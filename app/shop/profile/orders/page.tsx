'use client'

import React from 'react'
import { ProfileSidebar } from '@/components/profile/ProfileSidebar'
import { OrdersList } from '@/components/profile/OrdersList'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Package, Clock, MapPin, ChevronRight, Filter, TrendingUp } from 'lucide-react'

const allOrders = [
  {
    id: '#12345',
    restaurant: 'Burger House',
    items: 3,
    total: 890,
    status: 'delivered',
    date: '20 августа 2025',
    time: '14:30',
    address: 'ул. Пушкина, д. 10',
  },
  {
    id: '#12346',
    restaurant: 'Pizza Italia',
    items: 2,
    total: 1250,
    status: 'delivered',
    date: '18 августа 2025',
    time: '19:15',
    address: 'ул. Пушкина, д. 10',
  },
  {
    id: '#12347',
    restaurant: 'Wok & Roll',
    items: 4,
    total: 1560,
    status: 'delivered',
    date: '15 августа 2025',
    time: '13:00',
    address: 'ул. Пушкина, д. 10',
  },
  {
    id: '#12348',
    restaurant: 'Sushi Master',
    items: 5,
    total: 2100,
    status: 'delivered',
    date: '10 августа 2025',
    time: '20:00',
    address: 'ул. Пушкина, д. 10',
  },
  {
    id: '#12349',
    restaurant: 'Salad Bar',
    items: 2,
    total: 680,
    status: 'delivered',
    date: '5 августа 2025',
    time: '13:30',
    address: 'ул. Пушкина, д. 10',
  },
]

const statusConfig = {
  pending: { label: 'Ожидает', variant: 'warning' as const },
  preparing: { label: 'Готовится', variant: 'info' as const },
  delivering: { label: 'Доставляется', variant: 'info' as const },
  delivered: { label: 'Доставлен', variant: 'success' as const },
  cancelled: { label: 'Отменён', variant: 'error' as const },
}

export default function OrdersPage() {
  const [filter, setFilter] = React.useState<'all' | 'active' | 'history'>('all')

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container-main py-8">
        <div className="flex gap-8">
          <ProfileSidebar />
          
          <main className="flex-1 min-w-0 space-y-6">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-h2 font-bold text-zinc-900">Мои заказы</h1>
              <p className="text-body text-zinc-500 mt-1">История всех ваших заказов</p>
            </div>

            {/* Filters */}
            <Card className="border-zinc-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant={filter === 'all' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setFilter('all')}
                  >
                    Все заказы
                  </Button>
                  <Button
                    variant={filter === 'active' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setFilter('active')}
                  >
                    Активные
                  </Button>
                  <Button
                    variant={filter === 'history' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setFilter('history')}
                  >
                    История
                  </Button>
                  <div className="ml-auto">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Фильтры
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-zinc-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center">
                      <Package className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zinc-900">{allOrders.length}</div>
                      <div className="text-xs text-zinc-500">Всего заказов</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-zinc-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zinc-900">0</div>
                      <div className="text-xs text-zinc-500">В обработке</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-zinc-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zinc-900">1</div>
                      <div className="text-xs text-zinc-500">Адресов</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-zinc-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zinc-900">6 480 ₽</div>
                      <div className="text-xs text-zinc-500">Общая сумма</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Orders List */}
            <Card className="border-zinc-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Все заказы</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {allOrders.map((order) => {
                    const status = statusConfig[order.status as keyof typeof statusConfig]
                    
                    return (
                      <div
                        key={order.id}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border border-zinc-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-150 cursor-pointer"
                      >
                        <div className="flex items-start gap-4 mb-3 sm:mb-0">
                          <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                            <Package className="h-6 w-6 text-primary-500" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-zinc-900">{order.restaurant}</span>
                              <Badge variant={status.variant}>{status.label}</Badge>
                            </div>
                            
                            <div className="flex items-center gap-3 text-xs text-zinc-500 mb-1">
                              <span>{order.id}</span>
                              <span>•</span>
                              <span>{order.items} товара</span>
                              <span>•</span>
                              <span>{order.date}</span>
                            </div>
                            
                            <div className="flex items-center gap-1 text-xs text-zinc-400">
                              <MapPin className="h-3 w-3" />
                              <span>{order.address}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between sm:justify-end gap-4 pl-16 sm:pl-0">
                          <div className="text-right">
                            <div className="text-lg font-bold text-zinc-900">{order.total} ₽</div>
                            <div className="text-xs text-zinc-500">{order.time}</div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-zinc-300 group-hover:text-primary-500 transition-colors" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}
