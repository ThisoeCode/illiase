import {session} from "./auth"

const memEmails = process.env.MEM_EMAIL.split(',')

/** @type {boolean} */
export const isMem = memEmails.includes(session().user.email)

export const mem = email=>{
  return null
  // return member's document where inputed email !!!!!!!!!!!!!!!!!
}