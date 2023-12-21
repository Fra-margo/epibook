import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => (
  <ul>
    {comments.map((comment) => (
      <SingleComment key={comment.comment} comment={comment} />
    ))}
  </ul>
);

export default CommentsList;