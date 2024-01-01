'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import AuthLink from './AuthLink.jsx'

export default function Illiase() {
  return (
  <nav>
    <Link className={usePathname()==='/'?'actlink':'link'} href='/'>
      <h1>Surface</h1><p>Index</p>
    </Link><hr />
    <Link onClick={_=>console.log('Members Page')} className={usePathname()==='/members'?'actlink':'link'} href='/members'>
      <h1>Members</h1><p>Membra</p>
    </Link><hr />
    <Link className={usePathname()==='/works'?'actlink':'link'} href='/works'>
      <h1>Our Works</h1><p>Opera Nostra</p>
    </Link><hr />
    <AuthLink/><hr />
    <Link className={usePathname()==='/cnct'?'actlink':'link'} href='/cnct'>
      <h1>Contact Us</h1><p>Contactus Nos</p>
    </Link>
  </nav>
  )
}