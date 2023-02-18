import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Navigation } from "swiper";
import { userSwiperArray } from "../../../data/home";

const User = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.user}>
      <img src="/userheader.jpg" alt="" />
      <div className={styles.user__container}>
        {session ? (
          <div className={styles.user__infos}>
            <img src={session.user?.image} alt=""  className={styles.user__header}/>
            <h4>{session.user.name}</h4>
          </div>
        ) : (
          <div className={styles.user__infos}>
            <img
              src={
                "https://res.cloudinary.com/dqyluhs6m/image/upload/v1674726611/default-avatar_dkvfzi.jpg"
              }
              alt=""
            />

            <div className={styles.user__infos_btns}>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        )}
        <ul className={styles.user__links}>
          <li>
            <Link legacyBehavior href="/profile">
              <a>
                <IoSettingsOutline />
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="">
              <a>
                <HiOutlineClipboardList />
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="">
              <a>
                <AiOutlineMessage />
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="">
              <a>
                <BsHeart />
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.user__swiper}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            navigation={true}
            modules={[EffectCards, Navigation]}
            className="userMenu__swiper"
            style={{ maxWidth: "180px", height: "180px", marginTop: "3rem" }}
          >
            {userSwiperArray.map((item) => (
              <SwiperSlide>
                <Link href="">
                  <img src={item.image} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default User;
