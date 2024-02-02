import ProviderSignInListBtns from "@/components/AuthGotoProvider"
import {auth} from "@/app/_serve/auth"
import {redirect} from "next/navigation"
import {signIn} from "@/app/_serve/auth"

export const metadata = {
  title: 'Login',
}

export default async function IlliaseLogin() {
  const session = await auth()
  const login = async provider=>{
    "use server"
    await signIn(provider)
  }
  if(session) return redirect('/','push')

  return (
  <section id="login">
    <h1>LOGIN</h1>
    <ProviderSignInListBtns login={login}/>
  </section>
  )
}