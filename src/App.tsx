import { useEffect, useState } from "react";
import { getPosts, deletePost, updatePost } from "./utils/http";
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

  async function handleDeletePost(id: number) {
    const remainingPosts = posts.filter((post) => post.id !== id);
    setPosts(remainingPosts);

    try {
      await deletePost(id);
    } catch {
      throw new Error("Failed to delete post");
    }
  }

  async function handleUpdatePost(id: number) {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        updatePost(id, "Updated title", "Updated content");
        return { ...post, title: "Updated title", content: "Updated content" };
      }

      return post;
    });

    setPosts(updatedPosts);
  }

  return (
    <main>
      <nav></nav>
      <div className="container">
        <aside>
          <div>sidebars</div>
        </aside>
        <section className="content">
          <BlogPosts
            posts={posts}
            onDeletePost={handleDeletePost}
            onUpdatePost={handleUpdatePost}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
