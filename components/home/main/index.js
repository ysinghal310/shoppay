import styles from "./styles.module.scss";
import MainSwiper from "./swiper";
import Offers from "./offers";
import Menu from "./menu";
import User from "./User";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <Menu/>
      <MainSwiper />
      <Offers/>
      <User/>
    </div>
  );
}

export default Main;
