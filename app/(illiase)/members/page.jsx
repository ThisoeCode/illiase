import Link from "next/link"
import Image from "next/image"
import { insu } from "@/app/_serve/insu"

export const metadata = {
  title: 'Membra',
}

export default async function Illiase() {
  insu()
  const mem = await db.collection('mem').find({}).toArray()
  return (
  <section id="mem">
    <Link href='/bn' style={{background: 'linear-gradient(to right, #75ff7f, #85ffaa)'}}>
      <Image
        src="/ava/bn.png"
        width='144' height='144'
        alt='BN avatar' />
      <article>
        <div>
          <h1>BN</h1>
          <h2>#群主</h2>
        </div>
      </article>
    </Link>
  </section>
  )
}
