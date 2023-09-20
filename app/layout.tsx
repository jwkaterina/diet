'use client'

import './globals.css'
import { useState } from 'react'
import { PortionsProvider } from './context/portions-context'
import { SettingsProvider } from './context/settings-context'
import { MealsProvider } from './context/meals-context'
import NavBar from './layout/nav/nav-bar'
import Modal from './layout/modal/modal'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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
            <SettingsProvider>
              {children}
            </SettingsProvider>
            <Modal openState={{modalOpen, setModalOpen}}/>
          </MealsProvider>
        </PortionsProvider>
      </body>
    </html>
  )
}


