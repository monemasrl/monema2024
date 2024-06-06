import React from "react";
import Image from "next/image";
import style from "./carousel.module.scss";
import { AnimatePresence, motion } from "framer-motion";
type Tdata = {
  image: string;
  title: string;
  description: string;
  link: string;
};

function Scheda({
  data,
  title,
  setDataFromSlide,
}: {
  data: Tdata[];
  title: string;
  setDataFromSlide?: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const dataScheda = data.find((item) => item.title === title);

  return (
    <AnimatePresence>
      {dataScheda && (
        <motion.div
          className={style.homePortfolioItem}
          initial={{
            opacity: 0,
            x: "-100vw",
          }}
          animate={{
            opacity: 1,
            x: "0vw",
          }}
          exit={{
            opacity: 0,
            x: "-100vw",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className={style.homePortfolioItem__image}
            initial={{
              opacity: 0,
              x: "-100vw",
            }}
            animate={{
              opacity: 1,
              x: "0vw",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.7,
            }}
          >
            <Image
              src={dataScheda.image}
              alt={dataScheda.title}
              layout={"fill"}
            />
          </motion.div>
          <div className={style.homePortfolioItem__content}>
            <div onClick={() => setDataFromSlide && setDataFromSlide("")}>
              close
            </div>
            <h3>{dataScheda.title}</h3>
            <p>{dataScheda.description}</p>
            <a href={dataScheda.link}>Vai al sito</a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Scheda;
