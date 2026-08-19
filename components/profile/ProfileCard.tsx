'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin, Calendar, Edit2, Check } from 'lucide-react'

interface ProfileInfo {
  name: string
  email: string
  phone: string
  address: string
  joinDate: string
  avatar?: string
}

export function ProfileCard() {
  const [isEditing, setIsEditing] = React.useState(false)
  const [profile, setProfile] = React.useState<ProfileInfo>({
    name: 'Александр Петров',
    email: 'alex.petrov@student.edu',
    phone: '+7 (999) 123-45-67',
    address: 'ул. Пушкина, д. 10, корп. 2, Москва',
    joinDate: '15 января 2025',
    avatar: undefined,
  })

  const handleSave = () => {
    setIsEditing(false)
    // Here you would save to backend
  }

  return (
    <Card className="border-zinc-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar 
              size="lg" 
              fallback={profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            />
            <div>
              <CardTitle className="text-xl">{profile.name}</CardTitle>
              <p className="text-small text-zinc-500 mt-1">Студент</p>
            </div>
          </div>
          <Button
            variant={isEditing ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          >
            {isEditing ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Сохранить
              </>
            ) : (
              <>
                <Edit2 className="h-4 w-4 mr-2" />
                Редактировать
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Email</label>
            {isEditing ? (
              <Input 
                type="email" 
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            ) : (
              <div className="flex items-center gap-2 text-zinc-900">
                <Mail className="h-4 w-4 text-zinc-400" />
                <span>{profile.email}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Телефон</label>
            {isEditing ? (
              <Input 
                type="tel" 
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              />
            ) : (
              <div className="flex items-center gap-2 text-zinc-900">
                <Phone className="h-4 w-4 text-zinc-400" />
                <span>{profile.phone}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Адрес доставки</label>
            {isEditing ? (
              <Input 
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
              />
            ) : (
              <div className="flex items-center gap-2 text-zinc-900">
                <MapPin className="h-4 w-4 text-zinc-400" />
                <span>{profile.address}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Дата регистрации</label>
            <div className="flex items-center gap-2 text-zinc-900">
              <Calendar className="h-4 w-4 text-zinc-400" />
              <span>{profile.joinDate}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
