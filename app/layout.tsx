'use client'

import './globals.css'
import { useState } from 'react'
import { PortionsProvider } from './context/portions-context'
import { MealsProvider } from './context/meals-context'
import { NavBar } from './layout/nav/nav-bar'
import Modal from './layout/nav/modal/modal'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout(props: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleClearClick = () => {
    setModalOpen(true);
    setMenuOpen(false);
  }

  return (
    <html lang="en">
      <body className={menuOpen ? "menu-open" : ''}>
        <NavBar onMenuClick={() => setMenuOpen(!menuOpen)} onClearClick={handleClearClick}/>
        <PortionsProvider>
          <MealsProvider>
            {props.children}
            <Modal openState={{modalOpen, setModalOpen}}/>
          </MealsProvider>
        </PortionsProvider>
      </body>
    </html>
  )
}

export interface LayoutProps {
  children: React.ReactNode
}


