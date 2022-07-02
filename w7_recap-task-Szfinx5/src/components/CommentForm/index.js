import { useEffect, useState } from "react";

function CommentForm({ onSubmit }) {
  const [name, setName] = useState("Anon Author");
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="form">
      <h2> Comment form</h2>
      <label>
        <input
          onChange={function (event) {
            setName(event.target.value);
            console.log(name);
          }}
          placeholder="Anon Author"
          type="text"
        />
      </label>
      <label>
        <textarea
          className="textbox"
          onChange={function (event) {
            setComment(event.target.value);
            setDisabled(false);
          }}
        ></textarea>
      </label>

      <label>
        <button
          disabled={disabled}
          onClick={function () {
            onSubmit(name, comment);
            setDisabled(true);
          }}
        >
          Submit
        </button>
      </label>
    </div>
  );
}

export default CommentForm;
