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
  stiffness: 90,
  mass: 0.1,
  damping: 20,
  restDelta: 0.001,
};
function Hero() {
  const { scrollYProgress } = useScroll({});
  const slideUpTitle = useTransform(
    scrollYProgress,
    [0.15, 0.2],
    ["0%", "-70%"]
  );
  const slideUpTitle2 = useTransform(
    scrollYProgress,
    [0.17, 0.2],
    ["0%", "-60%"]
  );
  const slideUpTxt = useTransform(scrollYProgress, [0.17, 0.2], ["0%", "-50%"]);
  //smooth nell'animazione
  const animSlideUpTitle2 = useSpring(slideUpTitle2, springPhysics);
  const animSlideUpTitle = useSpring(slideUpTitle, springPhysics);
  const animSlideUpTxt = useSpring(slideUpTxt, springPhysics);
  return (
    <div className={style.wrapperHero}>
      <div
        className={style.hero}
        style={{
          position: "sticky",
        }}
      >
        <HeroScene />
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
              Siamo specializzati nella progettazione e nello sviluppo web. Il
              nostro team è composto da professionisti con oltre 20 anni di
              esperienza nel campo del design e dello sviluppo frontend e
              backend.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
