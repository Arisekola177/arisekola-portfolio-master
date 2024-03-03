
import './globals.css'


export const metadata = {
  title: 'Arisekola',
  description: 'Frontend Developer',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden '>
         {children}
        </body>
    </html>
  )
}
