import Hero from "./components/hero/hero";
import SmoothScroll from "./components/scroll/smoothScroll";
export default function Home() {
  return (
    <main>
      <SmoothScroll top={0}>
        <Hero />{" "}
        <section className="content">
          <p
            style={{
              maxWidth: 600,
              lineHeight: "24",

              position: "relative",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugiat
            itaque quia eligendi? Omnis minima necessitatibus expedita vitae et
            velit explicabo assumenda illo debitis repellendus earum ad odit,
            nam nostrum? Quasi velit natus ut officia pariatur consequuntur
            dolor saepe placeat tempora, quam quod consequatur cupiditate qui
            aliquam ad a nobis aperiam illum? Recusandae maiores id nesciunt
            doloribus, velit ipsam repudiandae. Officiis dolores at maiores
            error dolorem? Corrupti delectus omnis sed ad minus, voluptatibus
            laboriosam. Aliquam sapiente eius molestiae beatae, rem omnis
            similique praesentium, expedita accusantium quibusdam voluptatem
            corporis facere excepturi? Consectetur provident saepe ratione
            placeat amet veritatis. Dolorum corrupti distinctio officiis officia
            laudantium expedita aut iusto ipsum? Perspiciatis, suscipit
            consequatur magni fugit harum commodi nesciunt aperiam reprehenderit
            qui eaque veniam! Nisi accusantium at ab quo fugiat quidem corporis
            pariatur tenetur, eveniet perspiciatis maxime temporibus officia
            eius autem qui numquam. Dolorum accusantium cumque magnam repellat.
            Expedita quam soluta voluptatum dicta explicabo.
          </p>
        </section>
      </SmoothScroll>{" "}
    </main>
  );
}
