import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./carousel.module.scss";
import SingleSlide from "./singleslide";
import { useState } from "react";
import Image from "next/image";
import Scheda from "./scheda";

const data = [
  {
    image: "/img/portfolio/irma.jpg",
    title: "irma",
    description: "descrizione",
    link: "http://",
  },
  {
    image: "/img/portfolio/deka.jpg",
    title: "deka",
    description: "descrizione",
    link: "http://",
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
  const [dataFromSlide, setDataFromSlide] = useState<string | null>(null);
  return (
    <>
      <Scheda
        data={data}
        setDataFromSlide={setDataFromSlide}
        title={dataFromSlide || ""}
      />
      <div
        className={`slider-container ${style.monemaSlider}`}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "skew(34deg, -10deg)" : "skew(10deg,-2deg)",
          transition: "all .5s cubic-bezier(0,.07,.82,-0.03)",
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
      </div>
    </>
  );
}

export default CarouselResponsive;
