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
      <body className={`${inter.className} bg-background text-foreground antialiased flex flex-col min-h-screen`}>
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 h-12 flex items-center gap-6 text-sm">
            <Link href="/" className="text-white/60 hover:text-foreground transition-colors">
              Главная
            </Link>
            <Link
              href="/emergency"
              className="py-1.5 px-3 rounded-xl bg-[#dc2626] text-white text-sm font-semibold hover:bg-red-700 active:bg-red-800 transition-colors"
            >
              Экстренная помощь
            </Link>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-gray-800 mt-12 py-6 text-center text-sm text-gray-500">
          <a href="/about" className="hover:text-gray-300 mx-2">О проекте</a>
          <span className="mx-2 text-gray-700">·</span>

          <a href="https://github.com/kreatif4ik-stack/anti-scam" className="hover:text-gray-300 mx-2">GitHub</a>
        </footer>
      </body>
    </html>
  )
}
