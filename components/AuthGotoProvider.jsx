'use client'
import { useState } from "react"
import { LoginButton } from "./auth-loginAction"
import {GoogleIcon,GithubIcon} from "./SVGs"

export default function ProviderSignInListBtns({login}){
  const [isLoggingIn,loginLoading] = useState(false)
  return (
  <section style={isLoggingIn?{display:"none"}:null}>
    <LoginButton
      login={login}
      provider="google"
      className="provider-icon"
      title='Login with Google'
      onClick={_=>{loginLoading(false)}}
    >
      <GoogleIcon/>
    </LoginButton>
    <LoginButton
      login={login}
      provider="github"
      className="provider-icon"
      title='Login with GitHub'
      onClick={_=>{loginLoading(false)}}
      disable
    >
      <GithubIcon/>
    </LoginButton>
  </section>)
}