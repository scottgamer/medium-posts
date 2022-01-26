import React, { useEffect, useState } from "react";
import { CONSTANTS } from "../../constants";
import PostItem, { Post } from "./PostItem";

const PostsList = (): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${CONSTANTS.API_URL}/posts`);
      const posts = await response.json();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostsList;
