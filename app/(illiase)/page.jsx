import {auth} from "../_serve/auth"
import {SessionProvider} from "next-auth/react"
import {LogoutButton} from "@/components/auth-components"
import IlliaseSession from "@/components/session"

export default async function IlliaseSurface(){
  let logoutBtn = 0
  // const user = (await session()).user
  const session = await auth()
  if (session&&session.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
    logoutBtn = 1
  }
  return (
  <SessionProvider session={session}>
    <div id='surface'>
      <h1 style={{color:"white",fontWeight:"bold",fontSize:'18pt'}}>
        session: <IlliaseSession session={session}/>
      </h1>
      {logoutBtn?(_=>{
        return <LogoutButton style={{background:"white"}}>Logout</LogoutButton>
      })():null}
    </div>
  </SessionProvider>
  )
}
