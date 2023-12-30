import { usePathname } from "next/navigation"
import Link from "next/link"
// import {useSession} from "next-auth/react"

export default function AuthBtn() {
  const btn = (i, path) => {
    const list = {
      login: ["Login","Salve",'login'],
      home: ["Profile","Mihi",'home'],
      post: ["Post","Scribo",'post'],
    }
    return (
      <Link className={path === `/${list[i][2]}`?"actlink":"link"} href={`/${i}`}>
        <h1>{list[i][0]}</h1>
        <p>{list[i][1]}</p>
      </Link>
    )
  }
  
  // const {data:session} = useSession()
  const currentPath = usePathname()

  if (/*session*/0) {
    if (/*!session.user.email===listOfMembersGmails*/0) {
      return btn("home", currentPath)
    }
    return btn("post", currentPath)
  }
  return btn("login", currentPath)
}