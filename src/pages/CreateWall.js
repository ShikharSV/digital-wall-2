import React, { useState } from "react";
import styles from "./CreateWall.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserWalls } from "../store/userS";
import { useNavigate } from "react-router-dom";
const CreateWall = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const userWalls = useSelector((state) => state.users.userWalls);
  const navigate = useNavigate();

  const handleCreation = (e) => {
    e.preventDefault();
    let newWall = {
      title: title,
      body: body,
      blogs: [],
    };
    let updatedWalls = userWalls;
    updatedWalls = [...userWalls, newWall];
    dispatch(getUserWalls(updatedWalls));
    navigate("/user-wall");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <form action="" method="post" className={styles.form1}>
            <div className={styles.formExample1}>
              <label for="name">NAME </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter title of your blog...."
                required
              />
            </div>
            <div className={styles.formExample3}>
              <label for="Text">DESCRIPTION </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Start Writing...."
                required
              />
            </div>
            <div className={styles.formExample4}>
              <button className={styles.btn}>Submit</button>
            </div>
          </form>
        </div>
        <div className={styles.heading}>
          <span id={styles.headingWord}>C</span>reate <br />
          <span id={styles.headingWord}>Y</span>our <br />
          <span id={styles.headingWord}>W</span>all
        </div>
      </div>
    </>
  );
};

export default CreateWall;
