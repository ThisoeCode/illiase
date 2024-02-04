const { MongoClient, ServerApiVersion } = require('mongodb')
const { DB_URI, DB_NAME } = process.env
const options = {serverApi:{version:ServerApiVersion.v1,strict:true,deprecationErrors:true}}

const con = new MongoClient(DB_URI, options)

// Create client (from Atlas tips)
export const client = con

// Create async connection func (from ChatGPT tips)
let cachedClient = null
let cachedDb = null
export async function insu() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }
  await con.connect()
  const db = con.db(DB_NAME)
  cachedClient = con
  cachedDb = db
  return { client: cachedClient, db: cachedDb }
}


// @auth/mongodb-adapter connection requirement (from https://authjs.dev/reference/adapter/mongodb tips)
let clientPromise
const adapterClient = new MongoClient(DB_URI, options)
clientPromise = adapterClient.connect()
export default clientPromise