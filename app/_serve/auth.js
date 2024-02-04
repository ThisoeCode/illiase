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
 * Checks if the current user is a member of Illiase.
 *
 * @param {Function} isMem - Callback when the user is a member.
 * @param {Function} notMem - Callback when the user is not a member.
 * @param {Function} notAuth - Callback when the user is not authenticated.
 * @returns {boolean|null} - Returns true if the user is a member, false if not, and null if not authenticated.
 */
export async function isIlliaseMem(
  isMem =_=> {return true},
  notMem =_=> {return false},
  notAuth =_=> {return null},
){
  const memEmails = process.env.MEM_EMAIL.split(',')
  const session = await auth()
  if (session&&session.user) {
    if (memEmails.includes( session.user.email.toLowerCase() )) {
      return isMem()
    }
    return notMem()
  }
  return notAuth()
}

/**
 * @param {Function} authed - Callback when the user is logged in.
 * @param {Function} notAuthed - Callback when the user is logged out.
 * @returns {boolean}
 */
export async function isAuthed(
  authed =_=> {return true},
  notAuthed =_=> {return false},
){
  const isMemF = isIlliaseMem()
  switch (isMemF) {
    case true:
    case false:
      return authed()
    case null:
      return notAuthed()
  } 
}