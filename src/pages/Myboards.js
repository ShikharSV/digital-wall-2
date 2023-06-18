import React from "react";
import styles from "./Myboards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWall } from "../store/wallS";
import { useNavigate } from "react-router-dom";
import WallCard from "../components/WallCard";
import Navbar from "../components/Navbar";

const Myboards = () => {
  const walls = useSelector((state) => state.users.userWalls);
  const navigate = useNavigate();
  const signUpHandler = () => {
    navigate("/create-wall");
  };
  return (
    <>
      <Navbar title={"Your Boards"} />
      <div className={styles.body}>
        <div className={styles.container}>
          {walls.length > 0 ? (
            walls.map((wall) => <WallCard key={wall.body} data={wall} />)
          ) : (
            <div className={styles.error}>
              <p>You have not created any walls</p>
              <p>please create a wall</p>
              <button onClick={signUpHandler}>Create New Wall</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Myboards;
