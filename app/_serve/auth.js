import GoogleProvider from "next-auth/providers/google"

export const authConfig = {
  providers:[
    GoogleProvider({
      clientId: process.env.OAUTH_GOOGLE_CLIENT_ID??'',
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_ID??'',
    })
  ]
}