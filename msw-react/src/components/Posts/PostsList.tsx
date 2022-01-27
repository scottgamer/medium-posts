import React, { useEffect, useState } from "react";
import { CONSTANTS } from "../../constants";
import PostItem, { Post } from "./PostItem";

const PostsList = (): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${CONSTANTS.API_URL}/posts`);
        const posts = await response.json();

        setPosts(posts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (posts.length === 0) {
    return <div>No posts published</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostsList;
