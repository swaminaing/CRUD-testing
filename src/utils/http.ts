export async function getPosts() {
  const response = await fetch("http://localhost:3000/posts/");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export async function deletePost(id: number) {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
}
