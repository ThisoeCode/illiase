import {signOut} from "@/app/_serve/auth"

export function LogoutButton({children,...props}){
  return (
    <form action={async _=>{
      "use server"
      await signOut()
    }}>
      <button type="submit" {...props}>{children}</button>
    </form>
  )
}
