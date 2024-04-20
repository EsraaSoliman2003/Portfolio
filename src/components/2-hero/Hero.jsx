import React, { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import developeranimation from "../../animation/dev.json";
import { motion } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ type: "spring", stiffness: 100 }}
            src="./me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Front-end Developer
        </motion.h1>
        <p className="sub-title">
          I have a lot of skills and experience after more than 10 projects and
          two years of hard work
        </p>
        <div className="all-icons flex">
          <a href="https://www.facebook.com/esraa.ibrahim.58910">
            <div className="icon icon-facebook-square"></div>
          </a>
          <a href="https://twitter.com/EsraaEb44091913">
            <div className="icon icon-twitter"></div>
          </a>
          <a href="https://github.com/EsraaSoliman2003">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.linkedin.com/in/esraa-soliman-7b132a249/">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={developeranimation}
        />
      </div>
    </section>
  );
}
