'use client'

import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Navbar onMenuOpen={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}
