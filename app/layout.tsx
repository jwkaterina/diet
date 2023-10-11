'use client'

import './globals.css'
import styles from '/layout/nav/nav-bar.module.css'
import { useState } from 'react'
import Providers from './context/providers'
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
      <body className={menuOpen ? styles.menu_open : ''}>
        <NavBar onMenuClick={() => setMenuOpen(!menuOpen)} onClearClick={handleClearClick}/>
        <Providers>
            {children}
            <Modal openState={{modalOpen, setModalOpen}}/>
        </Providers>
      </body>
    </html>
  )
}


