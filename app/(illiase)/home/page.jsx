import {auth} from "@/app/_serve/auth"
import {redirect} from "next/navigation"

let u = null
export async function generateMetadata(){
  const session = await auth()
  if(session&&session.user){
    u = session.user.email.slice(0, session.user.email.indexOf("@"))
    /**
     * @todo Get `UserName` from db using `session`
     * @todo import dbget
     */
  }else redirect('/login?home')
  return {title:u}
}

export default function IlliaseHome() {
  return (
  <>{u+`'s info...`}</>
  )
}
