import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  const [value, setValue] = useState("");
  const [title, seTitle] = useState("");
  const [file, setfile] = useState("");
  const [category, setcategory] = useState("");

  const Category = ["Art", "Food", "Technology", "Design", "Science", "Cinema"];

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      console.log(res);
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    upload();
  };
  return (
    <div className="createPost">
      <div className="post-content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => seTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor"
          />
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
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setfile(e.target.files[0])}
          />
          <label htmlFor="file" id="label-file">
            Upload Image
          </label>
          <div className="buttons">
            <button className="buttons-1">Save as a draft</button>
            <button className="buttons-2" onClick={handleSubmit}>
              Publish
            </button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          {Category.map((ele) => {
            return (
              <div
                key={ele}
                className="category"
                onChange={(e) => setcategory(e.target.value)}>
                <input type="radio" id={ele} name="category" />
                <label htmlFor={ele}>{ele}</label>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
