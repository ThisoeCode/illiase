import WorkDetail from "@/components/workDetail"
import {redirect} from "next/navigation"

/** @param {{params: {id: string}}} */
export default function IlliaseMemberPage({params:p}){
  if(isNaN(p.id)) redirect('works')
  return <WorkDetail id={p.id}/>
}