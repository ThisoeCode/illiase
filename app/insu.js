import { MongoClient } from 'mongodb'

const uri = 'mongodb://127.0.0.1:27017/'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

export async function mongoConn() {
  if (!client.isConnected()) await client.connect()
  return client.db('illiase')
}