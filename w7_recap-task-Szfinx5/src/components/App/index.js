import React from "react";
import BlogPost from "../BlogPost";
import { blog } from "../../data/blogs.js";
import CommentList from "../CommentList";
import { useState } from "react";
import CommentForm from "../CommentForm";
import { commentArray } from "../../data/commentList.js";

function App() {
  const [comments, setComments] = useState(commentArray);

  function addComment(author, comment) {
    const newComment = {
      id: (comments.length + 1).toString(),
      author: author,
      content: comment,
    };
    setComments([...comments, newComment]);
  }

  return (
    <div className="main">
      <div className="blogs">
        <BlogPost blog={blog} />
      </div>

      <div>
        <CommentList comments={comments} />
        <CommentForm onSubmit={addComment} />
      </div>
    </div>
  );
}

export default App;
