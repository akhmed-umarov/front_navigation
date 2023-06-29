import './tailwind.css'
import { Montserrat } from 'next/font/google'
import { Providers } from '@/components/providers'
import AuthCheck from '@/components/auth.check'

const monterat = Montserrat({ subsets: ['latin']})

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
      <body className={monterat.className}>
        <Providers>
          <main className='overflow-hidden'>
            <AuthCheck>
              {children}
            </AuthCheck>
          </main>
        </Providers>
      </body>
    </html>
  )
}
