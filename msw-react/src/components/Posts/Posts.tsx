import React from "react";
import PostsList from "./PostsList";
import styles from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={styles.posts}>
      <h1>Posting all day!</h1>
      <PostsList />
    </div>
  );
};

export default Posts;
