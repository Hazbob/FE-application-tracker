export default async function registerUser(e, username, password) {
  e.preventDefault();
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}signup`, {
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
      throw new Error("Error registering user");
    }
  } catch (error) {
    throw error;
  }
}
