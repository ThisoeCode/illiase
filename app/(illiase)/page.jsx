import { session } from "../_serve/auth"

export default async function IlliaseSurface(){
  const user = (await session()).user
  return (
  <div id='surface'>
    <h1 style={{color:"white",fontWeight:"bold",fontSize:'18pt'}}>session: {user.email}</h1>
  </div>
  )
}
