import {auth} from "@/app/_serve/auth"
import {redirect} from "next/navigation"

const u = async _=>{
  const session = await auth()
  if(session&&session.user){
    /**
     * @todo Get `UserName` from db using `session`
     * @todo import dbget
     */
    return session.user.email.slice(0, session.user.email.indexOf("@"))
  } else redirect('/login?home') /** @todo REDIRECT TO BE ACCEPTED: `?home` */
}

export async function generateMetadata(){
  const uname = await u()
  return {title:uname}
}

export default async function IlliaseHome() {
  return (
  <>{await u()+`'s info...`}</>
  )
}
