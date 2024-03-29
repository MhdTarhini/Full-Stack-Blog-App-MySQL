import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostsMenu(props) {
  const { category, thisPost } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?category=${category}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);
  const filteredPosts = posts.filter((post) => post.id !== parseInt(thisPost));
  return (
    <div className="menu">
      <h1>Other Posts You May Like</h1>
      {filteredPosts.map((ele) => {
        return (
          <div className="post" key={ele.id}>
            <img src={`../uploads/${ele.image}`} alt={ele.title} />
            <h2>{ele.title}</h2>
            <Link to={`/post/${ele.id}`}>
              <button>Read More</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PostsMenu;
