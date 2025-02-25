import { type ReactNode } from "react";

export type PostProps = {
  id: number;
  title: string;
  children: ReactNode;
};

function Post({ id, title, children }: PostProps) {
  return (
    <div key={id}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default Post;
