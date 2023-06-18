import React, { useState } from "react";
import styles from "../pages/CreateBlog.module.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
const CreateBlog = (props) => {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [body, setBody] = useState("");
    const [selectedImages, setSelectedImages]= useState([]);
    const [images,setImages]=useState([]);

    const hiddenFileInput = React.useRef(null);
    const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };
  const currentUser = useSelector((state) => state.users.currentUser);
  const currentWall = useSelector((state) => state.walls.currentWall);
  const handleCreation = (e) => {
    e.preventDefault();
    console.log("hi");
    let newPost = {
      title: title,
      body: body,
      tags: tags,
      images: images,
    };
    console.log(newPost);
  };
    const onSelectFile=(event)=>{
        const selectedFiles=event.target.files;
        const selectedFilesArray=Array.from(selectedFiles);
        console.log(selectedFilesArray);
        // console.log(selectedFiles);

        const imagesArray=selectedFilesArray.map((file)=>{
            return URL.createObjectURL(file)
        })
        console.log(imagesArray);
        setSelectedImages(imagesArray);
        setImages(imagesArray);
        // console.log(Array.isArray(selectedFiles));
    }

  return (
    <>
      <Navbar title="My Wall"/>
      <div className={styles.topForm}>
        <div className={styles.firstInputPart}>
        <form action="" method="post" className={styles.form1}>
          <div className={styles.formExample1}>
            <label for="name">TITLE </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="name" id="name" placeholder="Enter title of your blog...." required />
          </div>
          <div className={styles.formExample2}>
            <label for="Tag">TAG </label>
            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} name="tag" id="tag" placeholder="Enter tag of your blog...." required />
          </div>
          <div className={styles.formExample3}>
            <label for="Text">TEXT </label>
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} name="text" id="text" placeholder="Start Writing...." required />
          </div>
          <div className={styles.formExample4}>
            <button type="submit" className={styles.btn} onClick={handleCreation}>Submit</button>
          </div>
        </form>
        </div>
        <div className={styles.secondImagePart}>
        <form action="" className={styles.secondImagePart2}>
          <div className={styles.formImage}>
            <label>ADD IMAGES <br />
            <span><img width="35" height="35" src="https://img.icons8.com/ios/50/FF7A90/upload-to-cloud--v1.png" alt="upload-to-cloud--v1"/></span>
            <input type="file" name="images" onChange={onSelectFile} multiple accept="image/png, image/jpeg, image/jpg, image/webp" />
            </label>
          </div>
        </form>
        </div>
        <div className={styles.imagesSelect}>
            {selectedImages && selectedImages.map((image)=>{
                return (
                    <div key={image} className={styles.imageSelected}>
                        <img src={image} height={200}/>
                        <button className={styles.imageButton} onClick={()=>setSelectedImages(selectedImages.filter((e)=>e!==image))}>Remove</button>
                    </div>
                )
            })}
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
