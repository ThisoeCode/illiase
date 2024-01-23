import {ReactNode,ReactElement} from "react"

/**
 * @param {Object} o
 * @param {string} o.provider
 * @param {ReactNode} o.children
 * @returns {ReactElement}
 */
export function LoginButton({provider,disable,children,login,...props}){
  return (
    <form
      style={disable?{display:"none"}:null}
      action={async _=>{login(provider)}}
    >
      <button disabled={!!disable} type="submit" id={provider+'-ico'} {...props}>
        {children}
      </button>
    </form>
  )
}