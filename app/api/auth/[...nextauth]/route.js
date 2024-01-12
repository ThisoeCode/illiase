// next-auth@4 features
  // import { authConfig } from "@/app/_serve/auth"
  // import NextAuth from "next-auth"
  // const handler = NextAuth(authConfig)
  // export { handler as GET, handler as POST }

// next-auth@beta (^5.0.0) features
  import {handlers} from "@/app/_serve/auth"
  export const {GET,POST} = handlers