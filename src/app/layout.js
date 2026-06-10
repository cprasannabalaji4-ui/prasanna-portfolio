import { Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
})

export const metadata = {
  title: 'Prasanna Balaji C — UI/UX Designer',
  description: 'UI/UX Designer & Developer from Erode, TN',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={syne.variable}>
      <body>{children}</body>
    </html>
  )
}