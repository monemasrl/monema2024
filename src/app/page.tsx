import Hero from "./components/hero/hero";
import SmoothScroll from "./components/scroll/smoothScroll";
export default function Home() {
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
        </section>
      </SmoothScroll>{" "}
    </main>
  );
}
