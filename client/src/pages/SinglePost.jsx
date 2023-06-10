import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PostsMenu from "../component/PostsMenu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

function SinglePost() {
  const [post, setPost] = useState([]);
  const postId = useParams();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId.id}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      try {
        await axios.delete(`/posts/${postId.id}`);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="single-page">
      <div className="content">
        <img src={`../uploads/${post.image}`} alt={post.title} />
        <div className="user">
          <img
            className="mini-profile-image"
            src={post.userImage}
            alt={post.username}
          />
          <div className="user-info">
            <span>{post.username}</span>
            <div>Posted {moment(post.date).fromNow()}</div>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={"/createPost?edit=2"} state={post}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </Link>
              <div>
                <svg
                  onClick={handleDelete}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.description }}
        />
      </div>
      <PostsMenu category={post.category} thisPost={postId.id} />
    </div>
  );
}

export default SinglePost;
