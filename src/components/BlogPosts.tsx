import Post from "./Post";
import { type Post as P } from "../App";

type BlogPostsProps = {
  posts: P[];
  onDeletePost: (id: number) => void;
};

function BlogPosts({ posts, onDeletePost }: BlogPostsProps) {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li>
            <Post id={post.id} title={post.title} onDeletePost={onDeletePost}>
              {post.content}
            </Post>
          </li>
        );
      })}
    </ul>
  );
}

export default BlogPosts;
