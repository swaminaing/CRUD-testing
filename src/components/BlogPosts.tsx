import Post from "./Post";
import { type Post as P } from "../App";

type BlogPostsProps = {
  posts: P[];
};

function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li>
            <Post id={post.id} title={post.title}>
              {post.content}
            </Post>
          </li>
        );
      })}
    </ul>
  );
}

export default BlogPosts;
