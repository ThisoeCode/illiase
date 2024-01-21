import SigninProviders from "@/components/AuthGotoProvider"
import {auth} from "@/app/_serve/auth"
import {redirect} from "next/navigation"

export const metadata = {
  title: 'Login',
}

export default async function IlliaseLogin() {
  const session = await auth()
  if(session) return redirect('/','push')
  return (
  <section id="login">
    <h1>LOGIN</h1>
    <p>with...</p>
    <SigninProviders/>
  </section>
  )
}