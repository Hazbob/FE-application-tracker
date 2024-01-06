import { ButtonClick } from "@/types/types.ts";

export default async function userSignIn(
  e: ButtonClick,
  username: string,
  password: string,
) {
  e.preventDefault();
  try {
    const res = await fetch(import.meta.env.VITE_API_URL + "signin", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }

    if (data.token) {
      return data.token;
    } else {
      throw new Error("Received no token in response");
    }
  } catch (err) {
    throw err;
  }
}
