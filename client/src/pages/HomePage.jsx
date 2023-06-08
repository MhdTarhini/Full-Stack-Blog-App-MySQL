import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="hone-page">
      <div className="posts">
        <div className="post">
          <div className="img">{/* <img src="" /> */}</div>
          <div className="content">
            <Link to={"/post/:id"} className="link">
              <h1>title</h1>
            </Link>
            <p>description</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
