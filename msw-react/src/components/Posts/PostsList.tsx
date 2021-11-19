import React, { useEffect, useState } from "react";
import PostItem, { Post } from "./PostItem";

const PostsList = (): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      // return posts;
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} title={post.title} body={post.body} />
      ))}
    </ul>
  );
};

export default PostsList;
