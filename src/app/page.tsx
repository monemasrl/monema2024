"use client";
import Hero from "./components/hero/hero";
import SmoothScroll from "./components/scroll/smoothScroll";
import Sezione2Animazione from "./components/svg/sezione2";
import Sezione1Animazione from "./components/svg/sezione1";
import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import CarouselResponsive from "./components/slider/carousel";
import Keyboard from "./components/3d/keyboard/model";
import { Canvas } from "@react-three/fiber";
import Mug from "./components/3d/mug/mug";
import Form from "./components/form/form";
export default function Home() {
  const wrapperSecondRef = useRef(null);
  const wrapperThirdRef = useRef(null);
  const wrapperContatti = useRef(null);

  const isWrapperSecondInView = useInView(wrapperSecondRef, {
    margin: "0% 0px -10% 0px",
  });
  const isWrapperThirdInView = useInView(wrapperThirdRef, {
    margin: "0% 0px -30% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: wrapperThirdRef,
    offset: ["start end", "10%"],
  });
  const yesWeDidItTransform = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["200%", "5%"]
  );

  const { scrollYProgress: scrollYProgressContatti } = useScroll({
    target: wrapperContatti,
    offset: ["start end", "200%"],
  });
  const progressContatti = useTransform(
    scrollYProgressContatti,
    [0, 1],
    ["0%", "200%"]
  );
  const clipAnimate = useMotionTemplate`circle(${progressContatti})`;
  return (
    <main>
      <SmoothScroll>
        <Hero />{" "}
        <section className="wrapperFirst">
          <div className="wrapperFirst__txt">
            <p>
              Le competenze di Monema coprono l’ambito sistemistico e quello
              dello sviluppo in ambito web enterprise. Si avvale di
              professionisti Backend E Frontend
            </p>
            <p>
              Web design, Ui, Prototipia. Monema si occupa di progettazione di
              estetica e funzionalità delle applicazioni web
            </p>
          </div>
          <div className="wrapperFirst__claim">
            Frontend <br /> Backend <br /> Web Design <br /> Prototipia
          </div>
          <div className="wrapperFirst__animation">
            <Sezione1Animazione />
          </div>
        </section>
        <section className="wrapperSecond" ref={wrapperSecondRef}>
          <div className="wrapperSecond__animation">
            <Sezione2Animazione isInView={isWrapperSecondInView} />
          </div>
          <div
            className="wrapperSecond__txt"
            style={{
              position: "relative",
            }}
          >
            <p>
              Monema è in grado di sviluppare applicazioni web complesse e
              performanti, garantendo la massima sicurezza e scalabilità
            </p>
            <p className="testo">
              &ldquo;Ci occupiamo dell&apos;intero processo, dall&rsquo;analisi
              iniziale fino alla messa in opera ma collaboriamo volentieri anche
              con altre realtà, aziende e professionisti, che ci coinvolgono
              come team di sviluppo per i loro progetti.&rdquo;
            </p>
          </div>
          <div className={"thirdKeyboartWrapper"}>
            <Canvas>
              <Keyboard />
            </Canvas>
          </div>
        </section>
        <section className="wrapperThird" ref={wrapperThirdRef}>
          <motion.h2 style={{ x: yesWeDidItTransform }}>
            YES! WE DID IT!
          </motion.h2>
          <CarouselResponsive isInView={isWrapperThirdInView} />
          <motion.div
            className={"thirdMugWrapper"}
            style={{
              y: yesWeDidItTransform,
            }}
          >
            <Canvas>
              <Mug />
            </Canvas>
          </motion.div>
        </section>
        <section className="lastSectionContatti" ref={wrapperContatti}>
          <div className="lastSectionContatti__content">
            <h2>Contattaci</h2>
            <p>
              Monema è un team di professionisti che si occupa di sviluppo
              software e web design. Se hai bisogno di un team di sviluppo per
              il tuo progetto, contattaci.
            </p>
            <Form />
            <motion.video
              style={{ clipPath: clipAnimate }}
              autoPlay
              loop
              muted
              playsInline
              className={"lastSectionContatti__video"}
            >
              <source src="/video.mp4" type="video/mp4" />
            </motion.video>
          </div>
        </section>
      </SmoothScroll>
    </main>
  );
}
