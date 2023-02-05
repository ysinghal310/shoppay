import styles from "./styles.module.scss";
import { BiRightArrowAlt } from "react-icons/bi";

const CircledIonButton = ({ type, text, icon }) => {
  return (
    <button className={styles.button} type={type}>
      {text}

      <div className={styles.svg__wrap}>
        <BiRightArrowAlt />
      </div>
    </button>
  );
};

export default CircledIonButton;
