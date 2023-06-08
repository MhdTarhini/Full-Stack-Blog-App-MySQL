import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  const [value, setValue] = useState("");
  return (
    <div className="createPost">
      <div className="post-content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="post-menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>Draft
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" id="art" name="cat" />
          <label htmlFor="art">Art</label>
          <input type="radio" id="art" name="cat" />
          <label htmlFor="art">Science</label>
          <input type="radio" id="art" name="cat" />
          <label htmlFor="art">Food</label>
          <input type="radio" id="art" name="cat" />
          <label htmlFor="art">Technology</label>
          <input type="radio" id="art" name="cat" />
          <label htmlFor="art">Design</label>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
