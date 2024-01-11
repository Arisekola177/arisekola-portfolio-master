import Navbar from '@/components/Navbar'
import Footer from '../components/Footer'
import './globals.css'


export const metadata = {
  title: 'Arisekola',
  description: 'Software Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-bodyFont bg-primary-black text-white w-full h-full overflow-x-hidden'>
        <Navbar />
         {children}
        <Footer />
        
        </body>
    </html>
  )
}
