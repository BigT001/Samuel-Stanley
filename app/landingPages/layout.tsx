"use client"

import styles from './styles.module.css'

export default function LandingPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.landingLayout}>
      {children}
    </div>
  )
}
