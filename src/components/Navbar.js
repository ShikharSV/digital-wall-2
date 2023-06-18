import React from 'react'
import styles from '../components/navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <>
        <div className={styles.back}>
        </div>
        <div className={styles.nav}>
            <div id={styles.nav}>
                <div className={styles.left}>
                    <div className={styles.logo}>DA</div>
                    <div className={styles.listItems}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.logos}>
                        <Link to="instagram.com"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/></Link>
                        <Link to="youtube.com"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/youtube-play--v1.png" alt="youtube-play--v1"/></Link>
                        <Link to="facebook.com"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png" alt="facebook-new"/></Link>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.btn}><Link to='/create-wall'>{props.title}</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar