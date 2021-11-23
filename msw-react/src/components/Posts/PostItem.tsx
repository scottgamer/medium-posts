import React, { useEffect, useState } from "react";
import styles from "./PostItem.module.css";
import Comment, { CommentProps } from "../Comments/Comment";

export interface Post {
  id: number;
  title: string;
  body: string;
}

const PostItem = ({ post }: { post: Post }): JSX.Element => {
  const { id, body, title } = post;
  const [comments, setComments] = useState<CommentProps[]>([]);
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
      <button
        className={styles.button}
        onClick={() => setToggleComments(!toggleComments)}
      >
        See comments
      </button>
      {toggleComments && comments
        ? comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        : null}
    </article>
  );
};

export default PostItem;
