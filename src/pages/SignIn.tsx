import { Button } from "@/components/ui/button.tsx";
import React, { useState } from "react";
import logo from "../assets/resumeRadar.png";
import { NavLink } from "react-router-dom";
import Header from "@/components/Header.tsx";
import registerUser from "@/services/signUp.ts";
import { useNavigate } from "react-router-dom";
import { saveTokenToStorage } from "@/utils/tokenStorage.ts";
import userSignIn from "@/services/signIn.ts";
import { OperationCheck } from "@/types/types.ts";

export default function SignIn({ operation }: OperationCheck) {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<any>) => {
    e.preventDefault();
    if (operation === "signin") {
      try {
        const JWT = await userSignIn(e, username, password);
        await saveTokenToStorage(JWT);
        navigate("/home");
      } catch (error: any) {
        setError(true);
        setErrorMessage(error.message);
      }
    } else {
      try {
        const JWT = await registerUser(e, username, password);
        await saveTokenToStorage(JWT);
        navigate("/home");
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("An unknown error occurred");
        }
        setError(true);
      }
    }
  };
  return (
    <div
      className={
        "flex-col flex justify-center items-center min-h-screen bg-blue-950"
      }
    >
      <Header />
      <form
        className={
          "flex flex-col justify-center items-center rounded-xl w-11/12 bg-white p-10 md:w-2/3"
        }
        onSubmit={handleSubmit}
      >
        <img className={"w-1/3"} src={logo} alt="logo image" />
        <h1 className={"text-4xl"}>Résumé Radar</h1>
        <label htmlFor="username">Username</label>
        {error && <p>{errorMessage}</p>}
        <input
          className={"border-2 border-black rounded-xl p-2  "}
          onChange={(e) => {
            setError(false);
            setUsername(e.target.value);
          }}
          type="text"
          id={"username"}
          value={username}
          required={true}
        />
        <label htmlFor="password">Password</label>
        <input
          className={"border-2 border-black rounded-xl p-2 "}
          onChange={(e) => {
            setError(false);
            setPassword(e.target.value);
          }}
          type="password"
          id={"password"}
          value={password}
          required={true}
        />
        <Button className={"my-2"} type={"submit"}>
          {operation === "signin" ? "Sign In" : "Sign Up"}
        </Button>
        {operation === "signin" ? (
          <div>
            <p>Not a member?</p>{" "}
            <NavLink className={"text-blue-700 underline"} to={"/signup"}>
              Sign Up
            </NavLink>
          </div>
        ) : (
          <div>
            <p>Already a member?</p>{" "}
            <NavLink className={"text-blue-700 underline"} to={"/signin"}>
              Sign In
            </NavLink>
          </div>
        )}
      </form>
    </div>
  );
}
