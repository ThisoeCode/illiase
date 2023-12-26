import { usePathname } from "next/navigation"
import Link from "next/link"
import { signIn, signOut, getProviders, useSession } from "next-auth/react"

const btn = (i) => {
  const list = {
    login: ["Login","Salve"],
    logout: ["Logout","Vale"],
    post: ["Post","Scribo"],
  }
  return (
    <Link className={usePathname() === "/post"?"actlink":"link"} href={`/${i}`}>
      <h1>{list[i][0]}</h1>
      <p>{list[i][1]}</p>
    </Link>
  )
}

export default function AuthBtn() {
  const {data:session} = useSession()

  if (/*session*/) {
    if (/*!session.user.email===listOfMembersGmails*/) {
      return btn("logout")
    }
    return btn("post")
  }
  return btn("login")
}