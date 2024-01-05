export async function saveTokenToStorage(token: string) {
  localStorage.setItem("token", token);
}

export async function getTokenFromStorage() {
  const JWT = localStorage.getItem("token");
  return JWT;
}
