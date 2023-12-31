import GotoAuth from "@/app/_components/illiase/AuthGotoProvider"

export const metadata = {
  title: 'Login',
}

export default function Illiase() {
  return (
  <section id="login">
    <h1>LOGIN</h1>
    <p>with...</p>
    <GotoAuth />
  </section>
  )
}
