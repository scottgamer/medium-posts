import { useEffect, useState } from "react";
import styles from "./PostItem.module.css";
import Comment, { CommentProps } from "../Comments/Comment";
import CONSTANTS from "../../constants";
import IPost from "../../interfaces/Post";

const PostItem = ({ post }: { post: IPost }): JSX.Element => {
  const { id, body, title } = post;
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [toggleComments, setToggleComments] = useState<boolean>(false);

  useEffect(() => {
    const fetchComments = async (postId: number) => {
      const response = await fetch(
        `${CONSTANTS.API_URL}/comments?postId=${postId}`
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

      {comments.length > 0 ? (
        <button
          className={styles.button}
          onClick={() => setToggleComments(!toggleComments)}
        >
          See comments
        </button>
      ) : (
        <div>No comments yet!</div>
      )}

      {toggleComments
        ? comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        : null}
    </article>
  );
};

export default PostItem;
