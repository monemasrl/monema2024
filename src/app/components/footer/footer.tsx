import Image from "next/image";
import style from "./footer.module.scss";
function Footer() {
  return (
    <footer>
      <div className={style.footer}>
        <div className={style.footer__left}>
          <Image src="/img/logofull.svg" alt="logo" width={300} height={70} />
        </div>
        <div className={style.footer__center}>
          <h2>Contatti</h2>
          <p>Indirizzo: Via Roma 123, 00100 Roma</p>
          <p>Telefono: 06 1234567</p>
          <p>Email: info@monema.it </p>
        </div>
        <div className={style.footer__right}>
          <h2>Info</h2>
          <ul>
            <li>cookie policy</li>
            <li>privacy policy</li>
            <li>preferenze</li>
          </ul>
        </div>
        <div className={style.irma}>
          <Image src="/img/logoirma.png" alt="irma" width={100} height={40} />
          <div className={style.irma__title}>Progetto IRMA</div>
        </div>
        <div className={style.footer__bottom}>
          <p>© 2024 Monema. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
