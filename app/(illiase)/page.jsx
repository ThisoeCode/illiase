import {auth} from "../_serve/auth"
import {SessionProvider} from "next-auth/react"
import IlliaseSession from "@/components/session"

export default async function IlliaseSurface(){
  // const user = (await session()).user
  const session = await auth()
  if (session&&session.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }
  return (
  <SessionProvider session={session}>
    <div id='surface'>
      <h1 style={{color:"white",fontWeight:"bold",fontSize:'18pt'}}>
        session: <IlliaseSession session={session}/>
      </h1>
    </div>
  </SessionProvider>
  )
}
