import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Распознай мошенника',
  description: 'Интерактивный тренажёр для распознавания мошеннических схем',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 h-12 flex items-center gap-6 text-sm">
            <Link href="/" className="text-white/60 hover:text-foreground transition-colors">
              Главная
            </Link>
            <Link href="/emergency" className="text-white/60 hover:text-foreground transition-colors">
              Экстренная помощь
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
