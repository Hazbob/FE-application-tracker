import { FormEvent } from "react"

export default async function handleSignIn(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    console.log("signed in")
}