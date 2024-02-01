import Link from "next/link"
import Image from "next/image"
import { dbget } from "@/app/_serve/dbget"
import fs from "fs/promises"

export const metadata = {
  title: 'Membra',
}


export default async function IlliaseMembers() {
  const mems = JSON.parse(
    await dbget('mem',{projection: { u: 1, displayName: 1, title:1, cardColor: 1, ava: 1, _id: 0 }})
  )

  const avasrc = async (data) => {
    return `/ava/`+data.ava
  }

  const imageElements = await Promise.all(mems.map(async (data, index) => {
    const imagePath = await avasrc(data)
    const backgroundStyle = { background: `linear-gradient(to right, ${data.cardColor})` }
    return (
      <Link key={index} href={'/'+data.u} style={backgroundStyle}>
        <Image
          src={imagePath}
          width='144' height='144'
          alt={data.displayName+"'s avatar"} />
        <article>
          <div>
            <h2>{data.displayName}</h2>
            <h3>#{data.title}</h3>
          </div>
        </article>
      </Link>
    )
  }))

  return <div id="titlewrap"><h1 id="headtitle">Members</h1>
    <section id="mem">
      {imageElements}
    </section>
  </div>
}