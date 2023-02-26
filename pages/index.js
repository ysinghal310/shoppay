import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import Main from "../components/home/main";
import FlashDeals from "../components/home/flashDeals";
import Category from "../components/home/category";
import {
  women_accessories,
  women_dresses,
  women_shoes,
  women_swiper,
  gamingSwiper,
  homeImprovSwiper,
} from "../data/home";
import { useMediaQuery } from "react-responsive";
import ProductsSwiper from "../components/productsSwiper";

export default function Home({ country }) {
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: "(max-width:850px" });
  const isMobile = useMediaQuery({ query: "(max-width:550px" });

  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            <Category
              header={"Dresses"}
              products={women_dresses}
              background={"#5a31f4"}
            />
            {!isMedium && (
              <Category
                header={"Shoes"}
                products={women_shoes}
                background={"#f15f6f"}
              />
            )}
            {isMobile && (
              <Category
                header={"Shoes"}
                products={women_shoes}
                background={"#f15f6f"}
              />
            )}
            <Category
              header={"Dresses"}
              products={women_accessories}
              background={"#fac80f"}
            />
          </div>
          <ProductsSwiper header="Clothes" products={women_swiper} />
          <ProductsSwiper header="Gaming Accessories" products={gamingSwiper} />
          <ProductsSwiper header="Women Clothes" products={women_swiper} />
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  // let data = await axios
  //   .get(
  //     "https://api.ipgeolocation.io/ipgeo?apiKey=690c05c5179346fabc642e48cf11c066"
  //   )
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .catch((err) => console.log(err));
  return {
    props: {
      // country: {
      //   name: data.country_name,
      //   flag: data.country_flag,
      //   currency: data.currency.code,
      // },
      country: {
        name: "India",
        flag: "https://ipgeolocation.io/static/flags/in_64.png",
        currency: "INR",
      },
    },
  };
}
