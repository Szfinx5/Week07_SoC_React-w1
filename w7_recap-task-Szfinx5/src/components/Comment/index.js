function Comment({ author, content }) {
  //console.log(content);

  function getInitials(author) {
    //Some logic
  }
  return (
    <div className="comments">
      <p>
        <b>{author}</b>
      </p>
      <p>{content}</p>
    </div>
  );
}

export default Comment;
