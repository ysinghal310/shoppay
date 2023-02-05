import Link from "next/link";
import styles from "./styles.module.scss";
import { IoLocationSharp } from "react-icons/io5";

const Copyright = ({ country }) => {
  return (
    <div className={styles.footer__copyright}>
      <section>©2022 SHOPPAY All Rights Reserved</section>
      <section>
        <ul>
          {data.map((link, index) => (
            <li key={index}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a href="#">
              <IoLocationSharp /> {country.name}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

const data = [
  {
    name: "Privacy Center",
    link: "",
  },
  {
    name: "Privacy & Cookie Policy",
    link: "",
  },
  {
    name: "Manage Cookies",
    link: "",
  },
  {
    name: "Terms & Conditons",
    link: "",
  },
  {
    name: "Privacy Center",
    link: "",
  },
];

export default Copyright;
