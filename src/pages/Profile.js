import React from 'react'
import { Link } from 'react-router-dom';
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import {BsAt,BsPlus,BsUpload} from "react-icons/bs";
import {AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter} from "react-icons/ai";
const Profile = () => {
    return (
        <>
          <div className={style.profileContainer}>
              <div className={exploreStyle.header}>
                  <div className={`${style.head}`}>
                      <Link to="/home">
                          <img src="/images/arrow.png" alt="" className={exploreStyle.arrow_icon}/>
                      </Link>
                      <div className={style.actionBtn}>
                          <BsAt/>
                          <BsUpload/>
                          <AiOutlineSetting/>
                      </div>
                  </div>
              </div>
              <img src="/images/user-img.jpg" alt="" className={style.profile_image}/>
              <h4>Abhinav Rai</h4>
              <p>@Ultimate_disturbing_element</p>
              <div className={style.follow}>
                  <p>
                      <span>0 </span>
                      followers
                  </p>
                  <p>
                      <span>51 </span>
                      following
                  </p>
              </div>
              <button>Add a bio</button>
              <div className="mb-4">
                  <button className="mb-0">
                  <AiOutlineTwitter/> Add Twitter
                  </button>
                  <button className="mb-0">
                  <AiOutlineInstagram/> Add Instagram
                  </button>
                
              </div>
              <div className={style.nominated}>
                  <img src="/images/user-img.jpg" alt=""/>
              <div> 
              <p>
                  joined 5 June-2021
              </p>
              <p>Nominated by <span>Abhi</span></p>
          </div>
          </div>
          <p>Member of</p>
          <button className={style.addMemberBtn}>
              <BsPlus/>
          </button>
          </div>
          
        </>
    )
}

export default Profile
