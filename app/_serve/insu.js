const { MongoClient, ServerApiVersion } = require('mongodb')
const { DB_PWD, DB_NAME } = process.env
const uri = `mongodb+srv://thisoecode:${encodeURIComponent(DB_PWD)}@cluster0.y0xpe1z.mongodb.net/?retryWrites=true&w=majority`

const con = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

// Create client (from Atlas tips)
export const client = con

// Create async connection func (from ChatGPT tips)
let cachedClient = null
let cachedDb = null
export async function insu() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }
  try {
    await con.connect()
    const db = con.db(DB_NAME)
    cachedClient = con
    cachedDb = db
    return { client, db }
  } catch (error) {
    console.error('[Illiase] DB conn error: ', error)
    throw new Error('CDB connection error')
  }
}


/*
  async function run() {
    try {
      // Ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 })
      console.log("[Illiase] Pinged MongoDB")
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close()
    }
  }
  run().catch(console.dir)
*/