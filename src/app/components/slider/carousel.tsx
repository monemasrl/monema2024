"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./carousel.module.scss";
import SingleSlide from "./singleslide";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import Scheda from "./scheda";

const data = [
  {
    image: "/img/portfolio/irma.jpg",
    title: "irma",
    description:
      "Innovative Radiation Monitor for contAiners at port custom gates\n <br/> Sviluppo di un portale innovativo per l’individuazione di materiale radioattivo all’interno dei container in transito nei varchi doganali portuali, \nun portale innovativo per individuare la presenza di materiale nucleare occultato, o semplicemente disperso, all’interno dei container durante la movimentazione.",
    link: "http://",
    skills: "Backend, Frontend, Ux/Ui",
    tecnologie: "javascript, react, nodejs, ...",
  },
  {
    image: "/img/portfolio/deka.jpg",
    title: "MONNALISA 4.0",
    description:
      "Ux/Ui, interfacce di utilizzo per device chirurgico, Innovazione attraverso sistemi rivoluzionari, tecnologie all'avanguardia, applicazioni avanzate e nuove frontiere terapeutiche. Da oltre 30 anni siamo un epicentro dell'innovazione per l'intero settore medico a livello mondiale.",
    skills: "Ux/Ui",
    tecnologie: "Illustrator, Affinity, Figma",
  },
  {
    image: "/img/portfolio/irma.jpg",
    title: "test",
    description:
      "Innovative Radiation Monitor for contAiners at port custom gates\n <br/> Sviluppo di un portale innovativo per l’individuazione di materiale radioattivo all’interno dei container in transito nei varchi doganali portuali, \nun portale innovativo per individuare la presenza di materiale nucleare occultato, o semplicemente disperso, all’interno dei container durante la movimentazione.",
    link: "http://",
    skills: "Backend, Frontend, Ux/Ui",
    tecnologie: "javascript, react, nodejs, ...",
  },
  {
    image: "/img/portfolio/deka.jpg",
    title: "test 2",
    description:
      "Ux/Ui, interfacce di utilizzo per device chirurgico, Innovazione attraverso sistemi rivoluzionari, tecnologie all'avanguardia, applicazioni avanzate e nuove frontiere terapeutiche. Da oltre 30 anni siamo un epicentro dell'innovazione per l'intero settore medico a livello mondiale.",
    skills: "Ux/Ui",
    tecnologie: "Illustrator, Affinity, Figma",
  },
];

function CarouselResponsive({ isInView }: { isInView: boolean }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const wrapper = useRef(null);
  const [dataFromSlide, setDataFromSlide] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);

  const trasizioneCarouselIniziale = useMotionTemplate`translate(${progress},0%) skew(34deg, -10deg)`;
  return (
    <>
      {typeof window === "object" &&
        createPortal(
          <Scheda
            data={data}
            setDataFromSlide={setDataFromSlide}
            title={dataFromSlide || ""}
          />,
          document.body
        )}
      <motion.div
        className={`slider-container ${style.monemaSlider}`}
        ref={wrapper}
        style={{
          opacity: 1,
          transform: trasizioneCarouselIniziale,
        }}
      >
        <Slider {...settings}>
          {data.map((item, index) => (
            <SingleSlide
              key={index}
              image={item.image}
              title={item.title}
              setDataFromSlide={setDataFromSlide}
              dataFromSlide={dataFromSlide}
            />
          ))}
        </Slider>
      </motion.div>
    </>
  );
}

export default CarouselResponsive;
