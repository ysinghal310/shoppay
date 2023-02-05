import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({ country }) {
  const { data: session } = useSession();

  return (
    <div>
      <Header country={country} />
      {session ? "YOU ARE LOGGED IN" : "YOU ARE NOT LOGGED IN"}
      <Footer country={country} />
    </div>
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
