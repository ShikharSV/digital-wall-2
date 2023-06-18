import React, { useState } from "react";
import styles from "./CreateWall.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserWalls } from "../store/userS";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
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
    navigate("/myboards");
  };

  const signInHandler = () => {
    navigate("/create-user");
  };
  return (
    <>
    <Navbar title="Create Board"/>
      {Object.keys(currentUser).length > 0 ? (
        <div className={styles.container}>
          <div className={styles.form}>
            <form
              action=""
              method="post"
              className={styles.form1}
              onSubmit={handleCreation}
            >
              <div className={styles.formExample1}>
                <label for="name">NAME </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter title of your blog...."
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={styles.formExample3}>
                <label for="Text">DESCRIPTION </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  value={body}
                  placeholder="Start Writing...."
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={styles.formExample4}>
                <button
                  className={styles.btn}
                  type="submit"
                  onClick={handleCreation}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className={styles.heading}>
            <span id={styles.headingWord}>C</span>reate <br />
            <span id={styles.headingWord}>Y</span>our <br />
            <span id={styles.headingWord}>W</span>all
          </div>
        </div>
      ) : (
        <div className={styles.error}>
          <div className={styles.image}>
            <img
              className={styles.image1}
              src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
              alt=""
            />
          </div>
          <div className={styles.writing}>
            <p><span id={styles.headingWord}>S</span>ign <span id={styles.headingWord}>I</span>n <span id={styles.headingWord}>F</span>irst</p>
            <button onClick={signInHandler}>Sign In</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateWall;
