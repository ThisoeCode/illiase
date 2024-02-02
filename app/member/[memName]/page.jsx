import MemDetail from "@/components/memberDetail";

/** @param {{params: {memName: string}}} */
export default function IlliaseMemberPage({params:p}){
  return <MemDetail memName={p.memName}/>
}