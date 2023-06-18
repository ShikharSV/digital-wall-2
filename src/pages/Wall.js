import React from "react";
import BlogCard from "../components/BlogCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Wall = () => {
  const currWall = useSelector((state) => state.walls.currentWall);
  const blogs = currWall.blogs;
  console.log(currWall);
  const navigate = useNavigate();
  const blogCreateHandler = () => {
    navigate("/create-blog");
  };
  return (
    <>
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog.id} data={blog} />)
      ) : (
        <>
          <p>Create Blogs</p>
          <button onClick={blogCreateHandler}>create new blog</button>
        </>
      )}
    </>
  );
};

export default Wall;