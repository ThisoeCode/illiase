import GotoAuth from "@/components/AuthGotoProvider"

export const metadata = {
  title: 'Login',
}

export default function IlliaseLogin() {
  return (
  <section id="login">
    <h1>LOGIN</h1>
    <p>with...</p>
    <GotoAuth />
  </section>
  )
}
