import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const category = useLocation().search;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`posts/${category}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <div className="hone-page">
      <div className="posts">
        {posts.map((ele) => {
          return (
            <div className="post" key={ele.id}>
              <div className="img">
                <img src={`../uploads/${ele.image}`} alt={ele.title} />
              </div>
              <div className="content">
                <Link to={`/post/${ele.id}`} className="link">
                  <h1>{ele.title}</h1>
                </Link>
                <p>{getText(ele.description)}</p>
                <button>Read more</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
