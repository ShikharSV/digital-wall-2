import './App.css';
import { users } from "./users";
import { blogs } from "./blogs";
import { walls } from "./walls";
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import CreateBlog from './pages/CreateBlog';
import CreateWall from './pages/CreateWall';
import CreateUser from './pages/CreateUser';
import Wall from './pages/Wall';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTotalUsers } from "./store/userS";
import { getTotalWalls } from "./store/wallS";
import { getTotalBlogs } from "./store/blogS";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Myboards from './pages/Myboards';
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalUsers(users));
    dispatch(getTotalWalls(walls));
    dispatch(getTotalBlogs(blogs));
  }, []);
  return (
    <>
      <BrowserRouter>
      {/* <Navbar title="Create Wall"/>  */}
        <Routes>
          <Route path='/' exact element={<LandingPage/>}></Route>
          <Route path='/create-blog' element={<CreateBlog/>}></Route>
          <Route path="/create-user" exact element={<CreateUser />}></Route>
          <Route path='/create-wall' element={<CreateWall/>}></Route>
          <Route path='/wall' exact element={<Wall/>}></Route>
          <Route path='/myboards' element={<Myboards/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
