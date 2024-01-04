import {user} from "../_serve/auth"

export default async function IlliaseSurface(){
  return (
  <div id='surface'>
    <h1 style={{color:"white",fontWeight:"bold",fontSize:'18pt'}}>SESSION: {user.email||'Not logged in'}</h1>
  </div>
  )
}
