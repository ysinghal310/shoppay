import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import Main from "../components/home/main";

export default function Home({ country }) {
  const { data: session } = useSession();

  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main/>

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
