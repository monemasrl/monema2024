"use client";
import style from "./hero.module.scss";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroScene = dynamic(() => import("../3d/heroScene"), {
  ssr: false,
  loading: () => <h1 style={{ height: 300 }}>puppa</h1>,
});

function Hero() {
  return (
    <div className={style.hero}>
      <HeroScene />
      <div className={style.hero__content}>
        <div className={style.hero__title}>
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
        </div>
        <div>
          <motion.div
            className={style.hero__description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            design & <br /> develop
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
          >
            Siamo specializzati nella progettazione e nello sviluppo web. Il
            nostro team è composto da professionisti con oltre 20 anni di
            esperienza nel campo del design e dello sviluppo frontend e backend.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
