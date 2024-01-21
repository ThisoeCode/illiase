import MenuLink from './menuLink.jsx'
import AuthLink from './AuthLink.jsx'
import CnctLink from './CnctLink.jsx'

export default async function IlliaseClientNav() {
  return (
    <nav>
      <MenuLink path="/" h1="Surface" p="Index" hr/>
      <MenuLink path="/members" h1="Members" p="Membra" hr/>
      <MenuLink path="/works" h1="Our Works" p="Opera Nostra" hr/>
      <AuthLink hr/>
      <CnctLink/>
    </nav>
  )
}