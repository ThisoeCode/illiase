import {auth,signOut} from "@/app/_serve/auth"
import{redirect}from"next/dist/server/api-utils"

export default async function IlliaseLogout(){
  const session = await auth()
  session||session.user||(await signOut())
  redirect('/')
}