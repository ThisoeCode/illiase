import { session } from "../_serve/auth"
const user = (await session()).user

export default async function Illiase(){
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  console.log(user.email)
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  return (
  <div id='surface'>
    <h1 style={{color:"white",fontWeight:"bold",fontSize:'18pt'}}>session: {user.email}</h1>
  </div>
  )
}
