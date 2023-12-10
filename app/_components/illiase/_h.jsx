import Link from 'next/link'
import Image from 'next/image'

export default function _h() {
  return (
  <header>
    <Link className='link' href="/"><figure>
      <Image
        src="/i/con2.png"
        alt="Illiase icon"
        width={33} height={33}
      />
      <figcaption>Illiase</figcaption>
    </figure></Link>
  </header>
  )
}