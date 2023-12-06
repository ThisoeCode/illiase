import './globals.css'


export const metadata = {
  title: 'Illiase',
  description: 'Illiase',
}

export default function IlliaseLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
