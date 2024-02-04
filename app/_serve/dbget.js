import{insu}from"./insu"

export const dbget = async (collection, findObj)=>{
  const {_,db}=await insu()
  return JSON.stringify(
    await db.collection(collection).find({}, findObj ).toArray()
  )
}

export const dbput = async (collection, doc) => {
  const { _, db } = await insu()
  await db.collection(collection).insert(doc)
}

export const dbupdate = async (collection, filter, update) => {
  const { _, db } = await insu()
  await db.collection(collection).updateOne(filter, update)
}

export const dbdelete = async (collection, filter) => {
  const { _, db } = await insu()
  await db.collection(collection).deleteMany(filter)
}

export const getMemData = email=>{
  email = email.toLowerCase()
  const memEmails = process.env.MEM_EMAIL.split(',')
  /** @todo return member's document where inputed email */
  return null
}