const BASE_URL = "https://api.github.com";

export async function getUser(username) {
  const res = await fetch(`${BASE_URL}/users/${username}`);

  if (!res.ok) throw new Error("User not found");

  return res.json();
}

export async function getRepos(username) {
  const res = await fetch(`${BASE_URL}/users/${username}/repos?sort=updated`);
  if (!res.ok) throw new Error("Could not fetch repositories");
  return res.json();
}
