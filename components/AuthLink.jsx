import MenuLink from "./menuLink"
import {auth} from "@/app/_serve/auth"
import {SessionProvider} from "next-auth/react"
const memEmails = process.env.MEM_EMAIL.split(',')

export default async function AuthLink({hr}) {
  const linkPath = (i) => {
    const h1_p = {
      login: ["Login","Salve"],
      home: ["Profile","Mihi"],
      post: ["Post","Scribo"],
    }
    return <SessionProvider session={session}>
      <MenuLink
        path={`/${i}`}
        h1={h1_p[i][0]}
        p={h1_p[i][1]} hr={hr}
      />
    </SessionProvider>
  }

  const session = await auth()
  if (session&&session.user) {
    if (memEmails.includes(session.user.email)) {
      return linkPath("post")
    }
    return linkPath("home")
  }
  return linkPath("login")
}