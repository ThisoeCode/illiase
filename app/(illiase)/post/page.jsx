import LogoutBtn from "@/components/logout"
import { signOut } from "next-auth/react"

export const metadata = {
  title: 'Post',
}

export default function IlliasePost() {
  return (
  <LogoutBtn/>
  )
}
