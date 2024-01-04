import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import clientPromise from "./insu"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import {getServerSession} from "next-auth"
const {OAUTH_DB_NAME,OAUTH_GOOGLE_CLIENT_ID:googleId,OAUTH_GOOGLE_CLIENT_SC:googleSc,OAUTH_GITHUB_ID:ghId,OAUTH_GITHUB_SC:ghSc} = process.env

export const authConfig = {

  providers: [
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSc,
    }),
    GitHubProvider({
      clientId: ghId,
      clientSecret: ghSc,
    })
  ],

  adapter: MongoDBAdapter(clientPromise,{databaseName:OAUTH_DB_NAME}),

  session: {
    updateAge: 7 * 24 * 60 * 60,
  },

  pages: {
    // signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },

}

export async function session() {
  return await getServerSession(authConfig)
}
export const user = (await session()).user||null