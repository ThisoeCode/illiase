import MenuLink from "./menuLink"

export default async function AuthLink(hr) {
  const linkPath = (i) => {
    const h1_p = {
      login: ["Login","Salve"],
      home: ["Profile","Mihi"],
      post: ["Post","Scribo"],
    }
    return <MenuLink
        path={`/${i}`}
        h1={h1_p[i][0]}
        p={h1_p[i][1]} hr={hr}
      />
  }

  // import { session } from '../_serve/auth.js'
  // const userSession = await session()
  // const user = userSession?userSession.user : null
  // if (user) {
  //   if (!user.email===process.env.MEM_EMAIL) {
  //     return linkPath("home")
  //   }
  //   return linkPath("post")
  // }
  return linkPath("login")
}