export async function saveTokenToStorage(token: string) {
  console.log(token);
  localStorage.setItem("token", token);
}

export async function getTokenFromStorage() {
  const JWT = localStorage.getItem("token");
  return JWT;
}
