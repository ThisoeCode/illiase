import {user} from "@/app/_serve/auth"
import LogoutBtn from "@/app/components/logout"

export const metadata = {
  title: user.email,
}

export default function IlliaseHome() {
  return (
  <>
    <p style={{color:'white'}}>Yo, {user.email||'Not logged in'}</p>
    <LogoutBtn/>
  </>
  )
}