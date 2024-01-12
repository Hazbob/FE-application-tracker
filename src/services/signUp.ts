import { FormEvent } from "react";

export default async function registerUser(
  e: FormEvent<any>,
  username: string,
  password: string,
) {
  e.preventDefault();
  try {
    console.log(username, password);
    const res = await fetch(`${import.meta.env.VITE_API_URL}signup`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    if (data.token) {
      return data.token;
    } else {
      throw new Error("Error registering user");
    }
  } catch (error) {
    throw error;
  }
}
