import Link from 'next/link'

export default function Illiase() {
  return (
  <nav>
    <Link className={route.pathname === '/' ? 'actlink' : 'link'} href='/'>
      <h1>Surface</h1><p>Index</p>
    </Link><hr />
    <Link className={route.pathname === '/members' ? 'actlink' : 'link'} href='/members'>
      <h1>Members</h1><p>Membra</p>
    </Link><hr />
    <Link className={route.pathname === '/works' ? 'actlink' : 'link'} href='/works'>
      <h1>Our Works</h1><p>Opera Nostra</p>
    </Link><hr />
    <Link className={route.pathname === '/login' ? 'actlink' : 'link'} href='/login'>
      <h1>Login</h1><p>Login</p>
    </Link><hr />
    <Link className={route.pathname === '/cnct' ? 'actlink' : 'link'} href='/cnct'>
      <h1>Contact Us</h1><p>Contactus Nos</p>
    </Link>
  </nav>
  )
}