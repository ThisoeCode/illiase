import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import clientPromise from "./insu"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
const {OAUTH_DB_NAME,OAUTH_GOOGLE_CLIENT_ID:googleId,OAUTH_GOOGLE_CLIENT_SC:googleSc,OAUTH_GITHUB_ID:ghId,OAUTH_GITHUB_SC:ghSc} = process.env


/** @type {import("next-auth").NextAuthConfig} */
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

  callbacks: {
    authorized({request,auth}){
      const {pathname} = request.nextUrl
      if (pathname === '/') return !!auth
      return !!1
    },
  },
}

// next-auth@4 features
  // import {getServerSession} from "next-auth"
  // export async function session() {
  //   return await getServerSession(authConfig)
  // }

// next-auth@beta (^5.0.0) features
  import NextAuth from "next-auth"
  export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)