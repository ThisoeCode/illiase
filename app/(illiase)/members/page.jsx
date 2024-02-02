import MemLink from "@/components/membersLink"
import { dbget } from "@/app/_serve/dbget"

export const metadata = {
  title: 'Membra',
}


export default async function IlliaseMembers() {
  const mems = JSON.parse(
    await dbget('mem',{projection: { u: 1, displayName: 1, title:1, cardColor: 1, ava: 1, _id: 0 }})
  )

  const imageElements = await Promise.all(mems.map(async (data, index) => {
    return <MemLink key={index} data={data}
      /** @todo Get ava from S3 */
      avaImgPath={`/ava/`+data.ava}
      bg={
        { background: `linear-gradient(to right, ${data.cardColor})` }
      }
    />
  }))

  return <div id="titlewrap"><h1 id="headtitle">Members</h1>
    <section id="mem">
      {imageElements}
    </section>
  </div>
}