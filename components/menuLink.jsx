'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * @param {string} path - `/path` that this link goto
 * @param {string} h1 - <h1>
 * @param {string} p - <p>
 * @param {boolean} hr - <hr/>
 */
export default function MenuLink({path,h1,p,hr}){
  return(<>
    <Link className={usePathname()===path?'actlink':'link'} href={path}>
      <h1>{h1}</h1><p>{p}</p>
    </Link>
    {hr?<hr/>:null}
  </>)
}