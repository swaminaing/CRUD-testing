import { useEffect, useState } from "react";
import { getPosts, deletePost, updatePost, addPosts } from "./utils/http";
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

  async function handleAddPost() {
    const newPost: Post = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: "New Post",
      content: "This is a new post",
    };

    setPosts([...posts, newPost]);

    addPosts(newPost);
  }

  return (
    <main>
      <nav>
        <button onClick={handleAddPost}>Add Post + </button>
      </nav>
      <div className="container">
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
