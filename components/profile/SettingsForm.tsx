'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Bell, Mail, Phone, MapPin, Shield, CreditCard, Check } from 'lucide-react'

export function SettingsForm() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    push: true,
    sms: false,
    orders: true,
    promos: false,
  })

  const [settings, setSettings] = React.useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    paymentMethod: '',
  })

  return (
    <div className="space-y-6">
      {/* Notifications */}
      <Card className="border-zinc-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary-500" />
            Уведомления
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              { key: 'email', label: 'Email уведомления', desc: 'Получать новости и акции на почту' },
              { key: 'push', label: 'Push уведомления', desc: 'Уведомления в браузере' },
              { key: 'sms', label: 'SMS уведомления', desc: 'Важные уведомления по SMS' },
              { key: 'orders', label: 'Статус заказов', desc: 'Информация о статусе заказа' },
              { key: 'promos', label: 'Акции и скидки', desc: 'Специальные предложения' },
            ].map((item) => (
              <label
                key={item.key}
                className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 hover:bg-zinc-50 cursor-pointer transition-colors"
              >
                <div>
                  <div className="font-medium text-zinc-900">{item.label}</div>
                  <div className="text-xs text-zinc-500">{item.desc}</div>
                </div>
                <input
                  type="checkbox"
                  checked={notifications[item.key as keyof typeof notifications]}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      [item.key]: e.target.checked,
                    })
                  }
                  className="h-5 w-5 rounded border-zinc-300 text-primary-500 focus:ring-primary-500"
                />
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card className="border-zinc-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary-500" />
            Безопасность
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-zinc-700 mb-1 block">Текущий пароль</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <label className="text-sm font-medium text-zinc-700 mb-1 block">Новый пароль</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <label className="text-sm font-medium text-zinc-700 mb-1 block">Подтвердите пароль</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button variant="primary" className="w-full sm:w-auto">
              Изменить пароль
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card className="border-zinc-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary-500" />
            Способы оплаты
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-lg border border-primary-200 bg-primary-50/50">
              <div className="flex items-center gap-3">
                <div className="h-10 w-14 rounded bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                  VISA
                </div>
                <div>
                  <div className="font-medium text-zinc-900">•••• 4242</div>
                  <div className="text-xs text-zinc-500">Основная карта</div>
                </div>
              </div>
              <Badge variant="success">Активна</Badge>
            </div>
            
            <Button variant="outline" className="w-full">
              Добавить карту
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Addresses */}
      <Card className="border-zinc-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary-500" />
            Адреса доставки
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border border-primary-200 bg-primary-50/50">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium text-zinc-900">Дом</div>
                  <div className="text-sm text-zinc-500 mt-1">ул. Пушкина, д. 10, корп. 2, Москва</div>
                </div>
                <Badge variant="success">Основной</Badge>
              </div>
              <div className="flex gap-2 mt-3">
                <Button variant="secondary" size="sm">Изменить</Button>
                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">Удалить</Button>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">
              Добавить адрес
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
