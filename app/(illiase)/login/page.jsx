import GotoGoogleAuth from "@/app/_components/illiase/AuthGotoGoogle"

export const metadata = {
  title: 'Login',
}

export default function Illiase() {
  return (
  <section id="login">
    <h1>LOGIN</h1>
    <GotoGoogleAuth />
  </section>
  )
}
