import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";

function CreatePost() {
  const postState = useLocation().state; //import post state from singlePost
  const [value, setValue] = useState(postState?.description || "");
  const [title, seTitle] = useState(postState?.title || "");
  const [file, setfile] = useState(null);
  const [category, setcategory] = useState(postState?.category || "");

  const MainCategory = [
    "Art",
    "Food",
    "Technology",
    "Design",
    "Science",
    "Cinema",
  ];

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (postState) {
        await axios.put(`posts/${postState.id}`, {
          title: title,
          description: value,
          category: category,
          image: file ? await upload() : "",
        });
      } else {
        await axios.post(`posts/`, {
          title: title,
          description: value,
          category: category,
          image: file ? await upload() : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="createPost">
      <div className="post-content">
        <input
          type="text"
          placeholder="Title"
          value={title}
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
            style={{ display: "none", cursor: "pointer" }}
            onChange={(e) => setfile(e.target.files[0])}
          />
          <label htmlFor="file" id="label-file" style={{ cursor: "pointer" }}>
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
          {MainCategory.map((ele) => {
            return (
              <div key={ele} className="category">
                <input
                  type="radio"
                  id={ele}
                  name="category"
                  value={ele}
                  checked={
                    category.toLocaleLowerCase() === ele.toLocaleLowerCase()
                  }
                  onChange={(e) => setcategory(e.target.value)}
                />
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
