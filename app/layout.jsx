import './globals.css'
import H from "./components/illiase/_h"
import F from "./components/illiase/_f"
import Nav from "./components/illiase/menu"
 
export const metadata = {
  title: {
    template: '%s | Illiase',
    default: 'Illiase',
  },
  author: 'Thisoe', discription: 'Illiase Chronicles is a private sandbox blog.', keywords: '伊利亚斯编年史,Illiase,bistard,Thisoe,TSK',

}

export default function IlliaseLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <H/>
        <Nav/>
        <main>
          {children}
          <F/>
        </main>
      </body>
    </html>
  )
}