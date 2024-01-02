import { usePathname } from "next/navigation"
import Link from "next/link"
// BUG!!!!!!!
/*
  Module not found: Can't resolve 'child_process' 
  Import trace for requested module:
    ./node_modules/mongodb/lib/client-side-encryption/auto_encrypter.js
    ./node_modules/mongodb/lib/index.js
    ./app/_serve/insu.js
    ./app/_serve/auth.js
    ./app/components/AuthLink.jsx
    ./app/components/menu.jsx
  | Bug Caused by
  V these 2 lines
*/
// import {session} from "../_serve/auth"
// const user = (await session()).user

export default function AuthLink(hr) {
  const btn = (i, path) => {
    const list = {
      login: ["Login","Salve",'login'],
      home: ["Profile","Mihi",'home'],
      post: ["Post","Scribo",'post'],
    }
    return (<>
      <Link className={path === `/${list[i][2]}`?"actlink":"link"} href={`/${i}`}>
        <h1>{list[i][0]}</h1>
        <p>{list[i][1]}</p>
      </Link>
      {hr?<hr/>:null}
    </>)
  }

  // const {data:session} = useSession() ?????????????????????
  const currentPath = usePathname()

  if (/*user*/0) {
    if (/*!user.email===listOfMembersGmails*/0) {
      return btn("home", currentPath)
    }
    return btn("post", currentPath)
  }
  return btn("login", currentPath)
}