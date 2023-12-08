import './globals.css'
import _h from "./components/illiase/_h"
import _f from "./components/illiase/_f"


export const metadata = {
  title: 'Illiase',
  description: 'Illiase',
}

export default function IlliaseLayout({ children }) {
  return (
    <html lang="en">
      <body id='illiase'>
        {children}
      </body>
    </html>
  )
}
