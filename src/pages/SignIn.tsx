import handleSignIn from "@/utils/signInHandler.ts";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import logo from '../assets/resumeRadar.png'
import handleSignUp from "@/utils/SignUpHandler.ts";
import {NavLink} from "react-router-dom";

export default function SignIn({operation}){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return <div className={"flex-col flex justify-center items-center min-h-screen bg-blue-950"}>
        <form className={"flex flex-col justify-center items-center rounded-xl w-11/12 bg-white p-10 md:w-2/3"} onSubmit={operation === 'signin' ? (e)=>handleSignIn(e) : (e)=>handleSignUp(e)}>
        <h1>Resume Radar</h1>
        <img className={"w-1/3"} src={logo} alt="logo image"/>
            <label htmlFor="username">Username:</label>
            <input className={"border-2 border-black rounded-xl p-2  "} onChange={e=> setUsername(e.target.value)} type="text" id={"username"} value={username}/>
            <label htmlFor="password">Password:</label>
            <input className={"border-2 border-black rounded-xl p-2 "} onChange={e=> setPassword(e.target.value)} type="text" id={"password"} value={password}/>
            <Button className={"my-2"} type={"submit"}>{operation === 'signin' ? 'Sign In'  : "Sign Up"}</Button>
            {operation === 'signin'
                ? <p>Not a member? <NavLink className={"text-blue-700 underline"} to={"/signup"}>Sign Up</NavLink></p>
                : <p >Already a member? <NavLink className={"text-blue-700 underline"}  to={"/signin"}>Sign In</NavLink></p>
            }
        </form>
    </div>
}