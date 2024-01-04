import MenuLink from './menuLink.jsx'
import {user} from '../_serve/auth.js'
import {isMem} from '../_serve/mem.js'

async function AuthLink(hr) {
  const linkPath = (i) => {
    const h1_p = {
      login: ["Login","Salve"],
      home: ["Profile","Mihi"],
      post: ["Post","Scribo"],
    }
    return <MenuLink path={`/${i}`} h1={h1_p[i][0]} p={h1_p[i][1]} hr={hr}/>
  }

  if (user) {
    if (!isMem) {
      return linkPath("home")
    }
    return linkPath("post")
  }
  return linkPath("login")
}


export default async function IlliaseClientNav() {
  return (
    <nav>
    <MenuLink path="/" h1="Surface" p="Index" hr/>
    <MenuLink path="/members" h1="Members" p="Membra" hr/>
    <MenuLink path="/works" h1="Our Works" p="Opera Nostra" hr/>
    <AuthLink hr/>
    <MenuLink path="/cnct" h1="Contactus Nos" p="Index"/>
  </nav>
  )
}