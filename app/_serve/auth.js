import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import clientPromise from "./insu"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import {getServerSession} from "next-auth"
const {OAUTH_DB_NAME,OAUTH_GOOGLE_CLIENT_ID:googleId,OAUTH_GOOGLE_CLIENT_SC:googleSc,OAUTH_GITHUB_ID:ghId,OAUTH_GITHUB_SC:ghSc} = process.env

const providers = [
  GoogleProvider({
    clientId: googleId,
    clientSecret: googleSc,
  }),
  GitHubProvider({
    clientId: ghId,
    clientSecret: ghSc,
  })
]

const adapter = MongoDBAdapter(clientPromise,{databaseName:OAUTH_DB_NAME})

export const authConfig = {
  providers,
  adapter,
}

export async function session() {
  return await getServerSession(authConfig)
}