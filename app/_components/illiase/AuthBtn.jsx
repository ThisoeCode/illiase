import { usePathname } from "next/navigation"
import Link from "next/link"
import { signIn, signOut, getProviders, useSession } from "next-auth/react"

const btn = (i) => {
  const list = {
    login: ["Login","Salve",'login'],
    logout: ["Logout","Vale",'logout'],
    post: ["Post","Scribo",'post'],
  }
  return (
    <Link className={usePathname() === `/${list[i][2]}`?"actlink":"link"} href={`/${i}`}>
      <h1>{list[i][0]}</h1>
      <p>{list[i][1]}</p>
    </Link>
  )
}

export default function AuthBtn() {
  // const {data:session} = useSession()

  if (/*session*/0) {
    if (/*!session.user.email===listOfMembersGmails*/0) {
      return btn("logout")
    }
    return btn("post")
  }
  return btn("login")
}