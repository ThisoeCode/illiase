import Link from "next/link"

export default function _f(){
  return (
  <footer>
    <p><Link className="footer-link" href='/cnct'>Contact Illiase</Link></p>
    <p><Link style={{textDecoration:'none',color:"inherit"}} className="footer-link" href='/about'>© 2018 Illiase</Link></p>
  </footer>
  )
}