'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Package, Clock, ChevronRight, MapPin, Utensils } from 'lucide-react'

interface Order {
  id: string
  restaurant: string
  items: number
  total: number
  status: 'pending' | 'preparing' | 'delivering' | 'delivered' | 'cancelled'
  date: string
  time: string
  address: string
}

const mockOrders: Order[] = [
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
]

const statusConfig = {
  pending: { label: 'Ожидает', variant: 'warning' as const },
  preparing: { label: 'Готовится', variant: 'info' as const },
  delivering: { label: 'Доставляется', variant: 'info' as const },
  delivered: { label: 'Доставлен', variant: 'success' as const },
  cancelled: { label: 'Отменён', variant: 'error' as const },
}

export function OrdersList() {
  return (
    <Card className="border-zinc-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">История заказов</CardTitle>
          <Button variant="ghost" size="sm" className="text-primary-500 hover:text-primary-600">
            Показать все
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {mockOrders.map((order) => {
            const status = statusConfig[order.status]
            
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
  )
}
