import React from "react";
import styles from "./Comment.module.css";

export interface CommentProps {
  id: number;
  name: string;
  email: string;
  body: string;
}

const Comment = ({ comment }: { comment: CommentProps }): JSX.Element => {
  return (
    <div className={styles.comment}>
      <div className={styles.body}>{comment.body}</div>
      <div className={styles.email}>Posted by: {comment.email}</div>
    </div>
  );
};

export default Comment;