"use client";
import Keyboard from "./components/3d/keyboard/model";
import Hero from "./components/hero/hero";
import SmoothScroll from "./components/scroll/smoothScroll";
import Sezione2Animazione from "./components/svg/sezione2";
import Sezione1Animazione from "./components/svg/sezione1";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const wrapperSecondRef = useRef(null);
  const isWrapperSecondInView = useInView(wrapperSecondRef, {
    margin: "0% 0px -30% 0px",
  });
  return (
    <main>
      <SmoothScroll top={0}>
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
        <section
          className="wrapperSecond"
          ref={wrapperSecondRef}
          style={{
            opacity: isWrapperSecondInView ? 1 : 0,
            transition: "opacity 1s",
          }}
        >
          <div className="wrapperSecond__keyboard">
            <Sezione2Animazione isInView={isWrapperSecondInView} />
          </div>
          <div
            className="wrapperSecond__txt"
            style={{
              position: "relative",
              opacity: isWrapperSecondInView ? 1 : 0,
              left: isWrapperSecondInView ? 0 : 100,
              transition: "opacity 1s, left 1s",
            }}
          >
            <p>
              Monema è in grado di sviluppare applicazioni web complesse e
              performanti, garantendo la massima sicurezza e scalabilità
            </p>
          </div>
        </section>
      </SmoothScroll>{" "}
    </main>
  );
}
