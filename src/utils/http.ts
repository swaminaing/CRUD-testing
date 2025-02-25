export async function getPosts() {
  const response = await fetch("http://localhost:3000/posts/");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}
