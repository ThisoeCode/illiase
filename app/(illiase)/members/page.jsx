import Link from "next/link"
import Image from "next/image"
import { dbget } from "@/app/_serve/dbget"

export const metadata = {
  title: 'Membra',
}


export default async function Illiase() {
  /** @type {Object} */
  const mems = await dbget('mem',{projection: { u: 1, displayName: 1, title:1, cardColor: 1, _id: 0 }})
  console.log(typeof(Object.entries(mems)))
  console.log("why")
  return (<>
  {Object.values(mems).map((data,index)=>{
    <section id="mem" key={index}>
      <Link href={'/'+data.u} style={{background: `linear-gradient(to right, ${data.cardColor})`}}>
        <Image
          src={"/ava/"+data.u+".png"}
          width='144' height='144'
          alt={data.displayName+"'s avatar"} />
        <article>
          <div>
            <h1>{data.displayName}</h1>
            <h2>#{data.title}</h2>
          </div>
        </article>
      </Link>
    </section>
  })}
  </>)
}
