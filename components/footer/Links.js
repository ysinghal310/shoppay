import Link from "next/link";
import styles from "./styles.module.scss";

const Links = () => {
  return (
    <div className={styles.footer__links}>
      {links.map((link, i) => (
        <ul key={i}>
          {i === 0 ? <img src="/logo.png" alt="logo" /> : <b>{link.heading}</b>}
          {link.links.map((link, i) => (
            <li key={i}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Links;

const links = [
  {
    heading: "SHOPPAY",
    links: [
      { name: "About Us", link: "" },
      { name: "Contact Us", link: "" },
      { name: "Social Responsibility", link: "" },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      { name: "Shipping Info", link: "" },
      { name: "Returns", link: "" },
      { name: "How To Order", link: "" },
      { name: "How To Track", link: "" },
      { name: "Size Guide", link: "" },
    ],
  },
  {
    heading: "CUSTOMER SERVICE",
    links: [
      { name: "Customer Service", link: "" },
      { name: "Terms and Condistions", link: "" },
      { name: "Consumer (Transactions)", link: "" },
      { name: "Take our feedback survey", link: "" },
    ],
  },
];
