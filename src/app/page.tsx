"use client";

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
const KeyboardCanvas = dynamic(
  () => import("./components/3d/keyboard/keyboardCanvas"),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  }
);

const MugCanvas = dynamic(() => import("./components/3d/mug/mugCanvas"), {
  ssr: false,
  loading: () => <p>loading...</p>,
});

const HeroScene = dynamic(() => import("./components/hero/heroScene"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",

        zIndex: 100,
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.2,
          fontSize: "3rem",
          padding: ".5rem 2rem",
          border: "1px solid #000",
        }}
      >
        loading...
      </h1>
    </div>
  ),
});
import Form from "./components/form/form";
import Image from "next/image";

import Hero from "./components/hero/hero";
import dynamic from "next/dynamic";

export default function Home() {
  const wrapperSecondRef = useRef(null);
  const wrapperThirdRef = useRef(null);
  const wrapperContatti = useRef(null);
  const isInView = useInView(wrapperContatti);
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

  const mugTransform = useTransform(scrollYProgress, [0, 0.8], ["200%", "-5%"]);
  const keyboardTransform = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["80%", "35%"]
  );

  const { scrollYProgress: scrollYProgressContatti } = useScroll({
    target: wrapperContatti,
    offset: ["start end", "end end"],
  });
  const progressContatti = useTransform(
    scrollYProgressContatti,
    [0.6, 0.9],
    ["0%", "35%"]
  );
  const progressForm = useTransform(
    scrollYProgressContatti,
    [0.5, 0.8],
    [0, 1]
  );
  const animateContatti = useMotionTemplate`scale(${progressForm})`;
  return (
    <main>
      <SmoothScroll>
        <Hero />

        <section className="wrapperFirst">
          <div className="wrapperFirst__txt">
            <p>
              Le competenze di Monema coprono l’ambito sistemistico e quello
              dello sviluppo in ambito web enterprise. Si avvale di
              professionisti Backend e Frontend
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
          <div className="wrapperSecond__txt">
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
        </section>
        <section className="sectionSkills">
          <motion.div
            className={"sectionSkills__single"}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2>E-commerce</h2>
            <Image
              src="/img/ecommerce.svg"
              width={90}
              height={90}
              alt="ecommerce"
            />
            <p>
              {" "}
              Che la tua offerta sia rivolta ad altri rivenditori (B2B) o ai
              consumatori finali (B2C): Abbiamo la soluzione giusta per te.
              Scopri i nostri prodotti e quello che possiamo fare per il tuo
              negozio online.
            </p>
          </motion.div>
          <motion.div
            className={"sectionSkills__single"}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2>CRM/ERP </h2>
            <Image src="/img/erp.svg" width={90} height={90} alt="erp" />
            <p>
              Un software gestionale deve migliorare le modalità di lavoro di
              un’azienda, e allo stesso tempo essere flessibile alle esigenze di
              chi lo usa. Utilizzando la tecnologia di Odoo siamo in grado di
              fare entrambe queste cose.
            </p>
          </motion.div>
          <motion.div
            className={"sectionSkills__single"}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2>Custom solutions</h2>
            <Image src="/img/custom.svg" width={90} height={90} alt="custom" />
            <p>
              Il nostro gruppo di lavoro, per formazione, competenze ed
              esperienza è in grado di progettare e realizzare soluzioni
              software in molti ambiti. Abbiamo preso parte a progetti di
              Industria 4.0, innovazione digitale, sviluppo di applicazioni
              mobile e in modalità client-server.
            </p>
          </motion.div>
        </section>
        <section className="wrapperThird" ref={wrapperThirdRef}>
          <motion.div
            className={"thirdKeyboartWrapper"}
            style={{
              y: keyboardTransform,
            }}
          >
            <KeyboardCanvas />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            SOMETHING WE DID...
          </motion.h2>
          <CarouselResponsive isInView={isWrapperThirdInView} />
          <motion.div
            className={"thirdMugWrapper"}
            style={{
              y: mugTransform,
            }}
          >
            <MugCanvas />
          </motion.div>
        </section>
        <section className="lastSectionContatti" ref={wrapperContatti}>
          <h2>
            Hai bisogno di informazioni? <br /> Un progetto da proporci? <br />{" "}
            Prendiamoci un caffè e parliamone.
          </h2>
          <div className="lastSectionContatti__content">
            <motion.div
              className="lastSectionContatti__content__video"
              style={{ flex: "1", maxWidth: "45%" }}
            >
              <HeroScene isInView={isInView} />
            </motion.div>

            <motion.div
              style={{
                width: progressContatti,
                margin: "1rem",
                overflow: "hidden",
                height: "100vh",
              }}
            >
              <Form />
            </motion.div>
          </div>
        </section>
      </SmoothScroll>
    </main>
  );
}
