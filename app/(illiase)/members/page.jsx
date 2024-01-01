import Link from "next/link"
import Image from "next/image"
import { dbget } from "@/app/_serve/dbget"
import fs from "fs/promises"

export const metadata = {
  title: 'Membra',
}


export default async function IlliaseMembers() {
  const mems = JSON.parse(
    await dbget('mem',{projection: { u: 1, displayName: 1, title:1, cardColor: 1, _id: 0 }})
  )

  const avasrc = async (data) => {
    const path = `/ava/${data.u}.`
    const supportFormat = ['png','jpg','jpeg']
    for (const format of supportFormat) {
      const imagePath = path + format
      try {
        await fs.access(`public${imagePath}`, fs.constants.F_OK)
        return imagePath
      } catch(error){undefined}
    }
    return '/i/con2.png'
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
            <h1>{data.displayName}</h1>
            <h2>#{data.title}</h2>
          </div>
        </article>
      </Link>
    )
  }))

  return <section id="mem">{imageElements}</section>
}