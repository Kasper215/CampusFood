'use client'

import React from 'react'
import { ProfileSidebar } from '@/components/profile/ProfileSidebar'
import { SettingsForm } from '@/components/profile/SettingsForm'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container-main py-8">
        <div className="flex gap-8">
          <ProfileSidebar />
          
          <main className="flex-1 min-w-0 space-y-6">
            <div className="mb-8">
              <h1 className="text-h2 font-bold text-zinc-900">Настройки</h1>
              <p className="text-body text-zinc-500 mt-1">Управляйте настройками аккаунта</p>
            </div>

            <SettingsForm />
          </main>
        </div>
      </div>
    </div>
  )
}
