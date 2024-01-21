import {signIn,signOut} from "@/app/_serve/auth"
import {ReactNode,ReactElement} from "react"

/**
 * @param {Object} o
 * @param {string} o.provider
 * @param {ReactNode} o.children
 * @returns {ReactElement}
 */
export function LoginButton({provider,disable,children,...props}){
  return (
    <form style={disable?{display:"none"}:null} action={async _=>{
      "use server"
      await signIn(provider)
    }}>
      <button disabled={!!disable} type="submit" id={provider+'-ico'} {...props}>
        {children}
      </button>
    </form>
  )
}

export function LogoutButton({children,...props}){
  return (
    <form action={async _=>{
      "use server"
      await signOut()
    }}>
      <button type="submit" {...props}>{children}</button>
    </form>
  )
}
