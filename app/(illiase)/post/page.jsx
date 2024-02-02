import {isIlliaseMem} from "@/app/_serve/auth"
import MemsPostPage from "@/components/postpage"
import { redirect } from "next/navigation"

export const metadata = {
  title: 'Post',
}

export default async function IlliasePost(){
  return (<>{
    await isIlliaseMem(
      _=>{return <MemsPostPage/>},
      _=>{redirect(`/cnct?post`)}, /** @todo REDIRECT TO BE ACCEPTED: `?post` */
      _=>{redirect('/login?post')}, /** @todo REDIRECT TO BE ACCEPTED: `?post` */
    )
  }</>)
}