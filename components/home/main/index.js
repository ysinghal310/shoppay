import styles from "./styles.module.scss";
import MainSwiper from "./swiper";
import Offers from "./offers";
import Menu from "./menu";
import User from "./User";
import Header from "./header"


function Main() {
  return (
    <div className={styles.main}>
      <Header/>
      <Menu/>
      <MainSwiper />
      <Offers/>
      <User/>
    </div>
  );
}

export default Main;
