import React from "react";
import { RegisterBg } from "../../../assets";
import "./BlogItem.scss";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non inventore sunt quas nulla amet corrupti laudantium accusantium vitae alias eius, architecto vero harum consequatur minima veniam deleniti animi voluptatum dolorum!
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
