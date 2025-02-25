export async function getPosts() {
  const response = await fetch("http://localhost:3000/posts/");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export async function addPosts(body: any) {
  const response = await fetch("http://localhost:3000/posts/", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export async function updatePost(id: number, title: string, content: string) {
  const body = {
    id: id,
    title: title,
    content: content,
  };

  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to update post");
  }
}

export async function deletePost(id: number) {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
}
