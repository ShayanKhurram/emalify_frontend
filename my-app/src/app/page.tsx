"use client"
import React, { useState } from 'react'
import { Users, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Form from '@/components/Form'
import Leads from '@/components/ui/Leads'

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard')

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Users,
      component: <Leads />
    },
    {
      id: 'form',
      label: 'Form',
      icon: UserPlus,
      component: <Form />
    }
  ]

  const activeItem = menuItems.find(item => item.id === activeComponent)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-8">Lead Management</h2>
          
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeComponent === item.id
              
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => setActiveComponent(item.id)}
                  className={`w-full justify-start h-12 text-left ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeItem?.component}
      </div>
    </div>
  )
}

export default Sidebar