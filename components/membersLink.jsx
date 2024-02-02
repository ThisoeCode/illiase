import Link from "next/link"
import Image from "next/image"

export default function MemLink({data,avaImgPath,bg}){
  return <Link
    href={'/member/'+data.u}
    style={bg}
    >
      <Image
        src={avaImgPath}
        width='144' height='144'
        alt={data.displayName+"'s avatar"} />
      <article>
        <div>
          <h2>{data.displayName}</h2>
          <h3>#{data.title}</h3>
        </div>
      </article>
    </Link>
}