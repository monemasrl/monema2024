import style from "./navbar.module.scss";
import Image from "next/image";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__logo}>
        <Image src="img/logomonema.svg" alt="logomonema" fill={true} />
      </div>
      <ul>
        <li>ecommerce</li>
        <li>crm/erp</li>
        <li>custom solutions</li>
      </ul>
    </nav>
  );
}
export default Navbar;
