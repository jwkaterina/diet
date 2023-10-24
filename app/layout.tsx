'use client'

import './globals.css'
import styles from './layout/nav/nav-bar.module.css'
import { useState } from 'react'
import Providers from './context/providers'
import NavBar from './layout/nav/nav-bar'
import Modal from './layout/modal/modal'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleClearClick = () => {
    setModalOpen(true);
  }

  return (
    <html lang="en">
      <body>
        <NavBar onClearClick={handleClearClick}/>
        <Providers>
            {children}
            <Modal openState={{modalOpen, setModalOpen}}/>
        </Providers>
      </body>
    </html>
  )
}


