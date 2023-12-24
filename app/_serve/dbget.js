import { insu } from "@/app/_serve/insu"

export const dbget = async (collection, findObj)=>{
  const {_,db}=await insu()
  return JSON.stringify(
    await db.collection(collection).find({}, findObj ).toArray()
  )
}