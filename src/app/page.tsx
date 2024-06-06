"use client";
import Hero from "./components/hero/hero";
import SmoothScroll from "./components/scroll/smoothScroll";
import Sezione2Animazione from "./components/svg/sezione2";
import Sezione1Animazione from "./components/svg/sezione1";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CarouselResponsive from "./components/slider/carousel";
export default function Home() {
  const wrapperSecondRef = useRef(null);
  const wrapperThirdRef = useRef(null);
  const isWrapperSecondInView = useInView(wrapperSecondRef, {
    margin: "0% 0px -10% 0px",
  });
  const isWrapperThirdInView = useInView(wrapperThirdRef, {
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
          </div>
        </section>
        <section className="wrapperThird" ref={wrapperThirdRef}>
          <CarouselResponsive isInView={isWrapperThirdInView} />
        </section>
      </SmoothScroll>{" "}
    </main>
  );
}
