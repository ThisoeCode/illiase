'use client'
import { signOut } from "next-auth/react"

export default function LogoutBtn(){return <button style={{fontSize:"18pt",padding:"9pt"}} onClick={signOut}>Logout</button>}