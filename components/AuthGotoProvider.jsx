'use client'
import { useState } from "react"
import { LoginButton } from "./auth-loginAction"
import {GoogleIcon,GithubIcon} from "./SVGs"

export default function ProviderSignInListBtns({login}){
  const [isLoggingIn,setIsLoggingIn] = useState(false)
  return <>
    <p style={isLoggingIn?{display:"none"}:null}>with...</p>
    <section>
  {isLoggingIn?
  (<> {/** @todo CSS? */}
    <i style={{color:"wheat"}}>Logging in...</i>
  </>):(<>
    <LoginButton
      // disable
      provider="Google"
      onClick={_=>{
        setIsLoggingIn(true)
        login('google')
      }}
    >
      <GoogleIcon/>
    </LoginButton>
    <LoginButton
      // disable
      provider="GitHub"
      onClick={_=>{
        setIsLoggingIn(true)
        login('github')
      }}
    >
      <GithubIcon/>
    </LoginButton>
  </>)
  }
  </section> </>
}