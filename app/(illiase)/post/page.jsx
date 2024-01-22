import {isIlliaseMem} from "@/app/_serve/auth"
import { redirect } from "next/navigation"

export const metadata = {
  title: 'Post',
}

export default async function IlliasePost(){
  const a = await isIlliaseMem(
    _=>{return "Is an Illiase member."},
    _=>{redirect(`/cnct?post`)},
    _=>{redirect('/login?post')},
  )
  return (
  <>{a}</>
  )
}