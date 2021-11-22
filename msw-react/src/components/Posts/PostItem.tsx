import React, { useEffect, useState } from "react";
import styles from "./PostItem.module.css";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostItem = ({ post }: { post: Post }): JSX.Element => {
  const { id, body, title } = post;
  const [comments, setComments] = useState<Comment[]>([]);
  const [toggleComments, setToggleComments] = useState<boolean>(false);

  useEffect(() => {
    const fetchComments = async (postId: number) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const data = await response.json();
      setComments(data);
    };
    fetchComments(id);
  }, [id]);

  return (
    <article className={styles.postItem}>
      <h3>{title}</h3>
      <div>{body}</div>
      <button onClick={() => setToggleComments(!toggleComments)}>
        See comments &darr;
      </button>
      {toggleComments && comments ? (
        <div>
          the comments
          {comments.map((comment) => (
            <div key={comment.id}>
              {comment.body} posted by: {comment.email}
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
};

export default PostItem;
