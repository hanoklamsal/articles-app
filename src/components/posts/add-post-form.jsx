import React from "react";

function AddPostForm() {
  return (
    <div>
      <form onSubmit={formSubmitButtonHandler}>
        <h4>Post a new article</h4>
        <input placeholder="Blog Title"></input>
        <input placeholder="Image URL"></input>{" "}
        <input type="text" placeholder="Blog Content"></input>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default AddPostForm;
