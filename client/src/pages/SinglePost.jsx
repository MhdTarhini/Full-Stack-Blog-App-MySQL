import React from "react";
import { Link } from "react-router-dom";
import PostsMenu from "../component/PostsMenu";

function SinglePost() {
  return (
    <div className="single-page">
      <div className="content">
        {/* <img /> */}
        <div className="user">
          {/* <img/> */}
          <div className="user-info">
            <span>Username</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={"/createPost?edit=2"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </Link>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex odit
          quaerat obcaecati consectetur nihil commodi quibusdam, vitae, eius a
          dolore enim, labore incidunt? Suscipit laboriosam eaque ipsa aliquid
          exercitationem?
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur
          rem in eum provident assumenda recusandae soluta! Excepturi velit
          natus cumque odio, corrupti praesentium numquam nisi dicta commodi
          consequuntur ut! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Error deleniti, incidunt beatae explicabo similique ut. Incidunt
          similique pariatur, aut enim corporis, quis natus voluptate laudantium
          dolorem officia repudiandae libero nobis!Lorem
        </p>
      </div>
      <PostsMenu />
    </div>
  );
}

export default SinglePost;
