"use client";
import style from "./hero.module.scss";
import dynamic from "next/dynamic";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { use, useRef } from "react";

const HeroScene = dynamic(() => import("./heroScene"), {
  ssr: false,
  loading: () => <h1 style={{ height: 300 }}>puppa</h1>,
});
const springPhysics = {
  stiffness: 70,
  mass: 0.1,
  damping: 20,
  restDelta: 0.001,
};
function Hero() {
  const { scrollYProgress } = useScroll({});
  const slideUpTitle = useTransform(scrollYProgress, [0, 0.1], ["0%", "-200%"]);
  const slideUpTitle2 = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["0%", "-100%"]
  );
  const slideScritteBackground = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["0%", "-300%"]
  );
  const slideUpTxt = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);
  //smooth nell'animazione
  const animSlideUpTitle2 = useSpring(slideUpTitle2, springPhysics);
  const animSlideUpTitle = useSpring(slideUpTitle, springPhysics);
  const animSlideUpTxt = useSpring(slideUpTxt, springPhysics);
  const animSlideScritteBackground = useSpring(
    slideScritteBackground,
    springPhysics
  );

  return (
    <div className={style.wrapperHero}>
      <div
        className={style.hero}
        style={{
          position: "sticky",
        }}
      >
        <HeroScene />
        <motion.div
          className={style.hero__tech}
          style={{
            y: animSlideScritteBackground,
            x: "-50%",
            rotateX: 1,
            rotateY: 1,
            rotateZ: -1,
            skewX: -2,
            skewY: -20,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.05,
          }}
          transition={{
            duration: 1,
          }}
        >
          Javascript, Python, Angular, React, Gatsby/Next, Node.js, Java,
          Spring, Spring Boot, Spring Security, JSP,ThymeLeaf, Struts, PHP,
          Ruby, AWS, HTML, CSS, PostgreSQL ,GraphQL, MongoDB, MySQL Firebase +
          Firestore + Google Cloud Functions + Google Cloud Storage
        </motion.div>
        <motion.div className={style.hero__content}>
          <motion.div
            className={style.hero__title}
            style={{ y: animSlideUpTitle }}
          >
            <div style={{ position: "relative" }}>
              <motion.span
                className={style.hero__title__mask}
                initial={{ width: "0%" }}
                animate={{ width: [0, "100%", 0] }}
                transition={{ duration: 1 }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0 }}
              >
                We are
              </motion.div>
            </div>
            <div style={{ position: "relative" }}>
              <motion.span
                className={style.hero__title__mask}
                initial={{ width: "0%" }}
                animate={{ width: [0, "100%", 0] }}
                transition={{ delay: 0.05, duration: 1 }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0 }}
              >
                here to:
              </motion.div>
            </div>
          </motion.div>
          <motion.div>
            <motion.div
              className={style.hero__description}
              style={{ y: animSlideUpTitle2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              design & <br /> develop
            </motion.div>
            <motion.p
              style={{ y: animSlideUpTxt }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 1 }}
            >
              Progettiamo e sviluppiamo per il web da oltre 20 anni
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
