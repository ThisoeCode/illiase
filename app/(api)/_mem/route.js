import { insu } from "@/app/_serve/insu"

export async function GET(){
  const {_,db}=await insu()
  const memData = await db.collection('mem')
    .find({}).toArray()
  return memData
}