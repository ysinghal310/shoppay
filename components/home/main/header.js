import styles from "./styles.module.scss";
import Link from "next/link";

const header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link legacyBehavior href="">Store</Link>
        </li>
        <li>
          <Link legacyBehavior href="">Electronics</Link>
        </li>
        <li>
          <Link legacyBehavior href="">Watches</Link>
        </li>
        <li>
          <Link legacyBehavior href="">Smartphones</Link>
        </li>
      </ul>
    </div>
  );
};

export default header;
