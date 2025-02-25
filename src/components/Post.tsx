import { type ReactNode } from "react";

export type PostProps = {
  id: number;
  title: string;
  children: ReactNode;

  onDeletePost: (id: number) => void;
  onUpdatePost: (id: number) => void;
};

function Post({ id, title, children, onDeletePost, onUpdatePost }: PostProps) {
  return (
    <div className="post" key={id}>
      <h2>{title}</h2>
      <p>{children}</p>

      <div className="buttons-container">
        <button onClick={() => onDeletePost(id)}>Delete</button>
        <button onClick={() => onUpdatePost(id)}>Edit</button>
      </div>
    </div>
  );
}

export default Post;
