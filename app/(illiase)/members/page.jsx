import Link from "next/link"
import Image from "next/image"
import { insu } from "@/app/_serve/insu"

export const metadata = {
  title: 'Membra',
}


const getMem = async ()=>{
  const {_,db}=await insu()
  return db.collection('mem')
    .find({}, {projection: { u: 1, displayName: 1, title:1, cardColor: 1, _id: 0 }} ).toArray()
}

export default async function Illiase() {
  /** @type {Array} */
  const mems = await getMem()
  console.log(mems)
  return (<>
  {mems.map((data,index)=>{
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
