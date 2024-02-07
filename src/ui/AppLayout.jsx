import React from 'react'
import TopNav from './TopNav'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
        <TopNav />

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AppLayout