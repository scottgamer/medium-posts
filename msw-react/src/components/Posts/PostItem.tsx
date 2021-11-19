import React from "react";
import styles from "./PostItem.module.css";

export interface Post {
  id?: number;
  title: string;
  body: string;
}

const PostItem = ({ title, body }: Post): JSX.Element => {
  return (
    <article className={styles.postItem}>
      <h3>{title}</h3>
      <div>{body}</div>
    </article>
  );
};

export default PostItem;
