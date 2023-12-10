'use client'
import Link from 'next/link'
import { usePathname  } from 'next/navigation'

export default function Illiase() {
  return (
  <nav>
    <Link className={usePathname()==='/'?'actlink':'link'} href='/'>
      <h1>Surface</h1><p>Index</p>
    </Link><hr />
    <Link className={usePathname()==='/members'?'actlink':'link'} href='/members'>
      <h1>Members</h1><p>Membra</p>
    </Link><hr />
    <Link className={usePathname()==='/works'?'actlink':'link'} href='/works'>
      <h1>Our Works</h1><p>Opera Nostra</p>
    </Link><hr />
    <Link className={usePathname()==='/login'?'actlink':'link'} href='/login'>
      <h1>Login</h1><p>Login</p>
    </Link><hr />
    <Link className={usePathname()==='/cnct'?'actlink':'link'} href='/cnct'>
      <h1>Contact Us</h1><p>Contactus Nos</p>
    </Link>
  </nav>
  )
}