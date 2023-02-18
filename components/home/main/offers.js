import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { offersList } from "../../../data/home";
import Link from "next/link";

const Offers = () => {
  return (
    <div className={styles.offers}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="offers_swiper"
      >
        {offersList.map((offer, i) => (
          <SwiperSlide key={i}>
            <Link href={""}>
              <img src={offer.image} alt={offer.price} />
            </Link>
            <span>${offer.price}</span>
            <span>-{offer.discount}%</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Offers;
