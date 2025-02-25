import Post from "./Post";
import { type Post as P } from "../App";

type BlogPostsProps = {
  posts: P[];
  onDeletePost: (id: number) => void;
  onUpdatePost: (id: number) => void;
};

function BlogPosts({ posts, onDeletePost, onUpdatePost }: BlogPostsProps) {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Post
              id={post.id}
              title={post.title}
              onDeletePost={onDeletePost}
              onUpdatePost={onUpdatePost}
            >
              {post.content}
            </Post>
          </li>
        );
      })}
    </ul>
  );
}

export default BlogPosts;
