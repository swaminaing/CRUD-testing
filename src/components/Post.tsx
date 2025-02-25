import { type ReactNode } from "react";

export type PostProps = {
  id: number;
  title: string;
  children: ReactNode;

  onDeletePost: (id: number) => void;
};

function Post({ id, title, children, onDeletePost }: PostProps) {
  return (
    <div className="post" key={id}>
      <h2>{title}</h2>
      <p>{children}</p>

      <button onClick={() => onDeletePost(id)}>Delete</button>
    </div>
  );
}

export default Post;
