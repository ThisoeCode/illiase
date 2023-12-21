import { dbget } from "@/app/_serve/dbget"

export async function GET(){
  const mems = JSON.parse(
    await dbget('mem',{projection: { u: 1, displayName: 1, title:1, cardColor: 1, _id: 0 }})
  )
  return mems
}