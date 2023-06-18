import React from 'react'
import styles from '../pages/LandingPage.module.css'
const LandingPage = () => {
  return (
    <>
    <div className={styles.card}>
            <div className={styles.blogFirst}>
                <section>
                <section>
                    <span><img width="32" height="16" src="https://img.icons8.com/office/16/FF42B3/horizontal-line.png" alt="horizontal-line"/></span>
                    <div className={styles.mostLiked}>
                        MOST LIKED
                    </div>
                </section>
                <div className={styles.likes}>
                    <section className={styles.like}><img width="48" height="48" src="https://img.icons8.com/fluency/48/like.png" alt="like"/></section>
                    <p>25</p>
                </div>
                </section>
                <div className={styles.name}>Imagining BRAZIL In Summers and Winters</div>
                <div className={styles.tag}><span>Travel</span></div>
                <div className={styles.blogWrite}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil quo provident culpa  laborum!</div>
                
            </div>
            <div className={styles.image}>
                <img src="https://images.unsplash.com/photo-1686728720905-ad781b459a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>  
        </div>
    </>
  )
}

export default LandingPage