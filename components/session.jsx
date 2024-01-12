"use client"
import {useSession} from "next-auth/react"
// import {useState} from "react"
export default function IlliaseSession(/*{session}*/){
  const { data: session, stat } = useSession()
  if(session&&session.user){
    return <>{session.user.email}</>
  }
  return <>{"`null`"}</>
}