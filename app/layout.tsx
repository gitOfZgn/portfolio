import Header from '@/components/ui/Header'
import './globals.css'
import { Inter, Noto_Sans_JP, Varela_Round } from 'next/font/google'
import Footer from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

// const noto = Noto_Sans_JP({
//   weight: "500",
//   subsets: ["latin"],
// });

const vr = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: 'ZGN - Portfolio',
  description: 'A showcase of my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={noto.className}> */}
      <body className={vr.className}>
      {/* <body className={inter.className}> */}

        <Header />
        <div className="">
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}