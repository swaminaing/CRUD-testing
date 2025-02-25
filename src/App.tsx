import { useEffect, useState } from "react";
import { getPosts } from "./utils/http";
import Post from "./components/Post";
import BlogPosts from "./components/BlogPosts";

export type Post = {
  id: number;
  title: string;
  content: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    try {
      async function handleGetPosts() {
        const data = await getPosts();

        setPosts(data);
      }

      handleGetPosts();
    } catch {
      throw new Error("Failed to fetch posts");
    }
  }, []);

  return (
    <main>
      <BlogPosts posts={posts} />
    </main>
  );
}

export default App;
