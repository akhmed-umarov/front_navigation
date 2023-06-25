import './tailwind.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import AuthCheck from '@/components/auth.check'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ГГНТУ диплом',
  description: 'Студент Умаров Ильяс',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          <main className=' overflow-hidden'>
            <AuthCheck>
              {children}
            </AuthCheck>
          </main>
        </Providers>
      </body>
    </html>
  )
}
