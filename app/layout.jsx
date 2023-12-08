import './globals.css'
import H from "./components/illiase/_h"
import F from "./components/illiase/_f"
import Nav from "./components/illiase/menu"
 
export const metadata = {
  title: {
    template: '%s | ILLIASE',
    default: 'ILLIASE',
  },
  author: 'Thisoe', discription: 'ILLIASE Chronicles is a private sandbox blog.', keywords: '伊利亚斯编年史,Illiase,bistard,Thisoe,TSK',

}

export default function IlliaseLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <H/>
        <Nav/>
        {children}
        <F/>
      </body>
    </html>
  )
}