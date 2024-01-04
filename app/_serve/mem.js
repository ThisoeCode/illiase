import {user} from "./auth"

const memEmails = process.env.MEM_EMAIL.split(',')

/** @type {boolean} */
export const isMem = memEmails.includes(user.email)

export const mem = email=>{

  // return member's document where inputed email !!!!!!!!!!!!!!!!!
}