import { useContext, useEffect, useState, useRef } from "react"
import { PhotoCommentsForm } from "./PhotoCommentsForm";
import { UserContext } from "../../UserContext";
import styles from "./PhotoComments.module.css";

export const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);
  const commentsSection = useRef(null);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
           <b>{comment.comment_author}: </b>
           <span>{comment.comment_content}</span>
          </li>))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  )
}
