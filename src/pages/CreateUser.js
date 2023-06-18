import React, { useState } from "react";
import styles from "./CreateUser.module.css";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../store/userS";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreation = (e) => {
    e.preventDefault();
    let newUser = {
      id: "9910",
      name: name,
      email: email,
      bookmarks: [],
      walls: [],
    };
    dispatch(getCurrentUser(newUser));
    console.log(newUser);
    navigate("/");
  };
  return (
    <>
      <Navbar title="Create Board" />
      <div className={styles.container}>
        <div className={styles.createU}>
          <div className={styles.container1}>
            <form
              action=""
              method="post"
              autoComplete="off"
              noValidate
              onSubmit={handleCreation}
            >
              <h2>Name</h2>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <h2>Email</h2>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              <h2>Password</h2>
              <input
                type="text"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" onClick={handleCreation}>
                Create User
              </button>
            </form>
          </div>
        </div>
        <div className={styles.createUserImage}>
          <img src="https://cdn-icons-png.flaticon.com/512/1250/1250739.png?w=740&t=st=1687085686~exp=1687086286~hmac=70a3a51d93665103584dff6d4090d6ab9f3a50aa8700ed1cf3171763287097c9" alt="" />
        </div>
      </div>
    </>
  );
};

export default CreateUser;
