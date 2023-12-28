import GoogleProvider from "next-auth/providers/google"
import clientPromise from "./insu"
import NextAuth from "next-auth/next"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

const providers = [
  GoogleProvider({
    clientId: process.env.OAUTH_GOOGLE_CLIENT_ID??'',
    clientSecret: process.env.OAUTH_GOOGLE_CLIENT_ID??'',
  })
]
export const authConfig = {
  providers
}

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers
})