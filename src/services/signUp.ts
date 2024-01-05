import { useNavigate } from "react-router-dom";

export default async function registerUser(
  e,
  username: string,
  password: string,
) {
  e.preventDefault();
  try {
    return new Promise(async (resolve, reject) => {
      const res = await fetch(import.meta.env.VITE_DATABASE_URL + "signup", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        // Handle non-2xx status codes here
        throw new Error(`Server responded with a status of ${res.status}`);
      }

      const data = await res.json();
      if (data.token) {
        resolve(data.token);
      } else {
        reject("Error registering user");
      }
    });
  } catch (err) {}
}
