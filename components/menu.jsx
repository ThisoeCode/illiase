import MenuLink from './menuLink.jsx'
import AuthLink from './AuthLink.jsx'

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