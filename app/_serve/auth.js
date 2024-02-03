import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import clientPromise from "./insu"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
const {OAUTH_DB_NAME,OAUTH_GOOGLE_CLIENT_ID:googleId,OAUTH_GOOGLE_CLIENT_SC:googleSc,OAUTH_GITHUB_ID:ghId,OAUTH_GITHUB_SC:ghSc} = process.env


// CONFIG
  /**
   * Trust the oauth provider to correctly verify email addresses & opt-in to account linking even when the user is not signed-in
   * {@link https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/lib/actions/callback/handle-login.ts#L198}
   * @description On sign-up, if the provider returns an email that is already exists in accounts collection, auto-link this account to the existing account.
  */
  const allowDangerousEmailAccountLinking = true

/** @type {import("next-auth").NextAuthConfig} */
export const authConfig = {

  providers: [
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSc,
      allowDangerousEmailAccountLinking,
    }),

    GitHubProvider({
      clientId: ghId,
      clientSecret: ghSc,
      allowDangerousEmailAccountLinking,
    }),
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


// AUTH
import NextAuth from "next-auth"
export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)


// ISMEM
/**
 * @param {Function} isMem - When is a mem, callback
 * @param {Function} notMem - When is not a mem, callback
 * @param {Function} notAuth - When is not logged in, callback
 * @returns {true|false|null}
 */
export async function isIlliaseMem(
  isMem =_=> {return true},
  notMem =_=> {return false},
  notAuth =_=> {return null},
){
  const memEmails = process.env.MEM_EMAIL.split(',')
  const session = await auth()
  if (session&&session.user) {
    if (memEmails.includes(session.user.email)) {
      return isMem()
    }
    return notMem()
  }
  return notAuth()
}