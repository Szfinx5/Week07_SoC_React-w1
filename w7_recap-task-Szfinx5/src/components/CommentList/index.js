import Comment from "../Comment/index.js";

function CommentList({ comments }) {
  return (
    <div>
      <h2>Comment list</h2>

      {comments.map(function (comment) {
        return (
          <Comment
            key={comment.id}
            author={comment.author}
            content={comment.content}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
