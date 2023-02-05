import styles from "./styles.module.scss";

const Payment = () => {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer__flexwrap}>
        <img
          src="https://toppng.com/uploads/preview/visa-logo-png-free-116619400069ezxtvw3hd.png"
          alt="visa"
        />
        <img
          src="https://w7.pngwing.com/pngs/397/885/png-transparent-logo-mastercard-product-font-mastercard-text-orange-logo.png"
          alt="mastercard"
        />
        <img
          src="https://i.pinimg.com/originals/f1/00/00/f100009a33d246b5c9a1bed981f1ba78.png"
          alt="paypal"
        />
      </div>
    </div>
  );
};

export default Payment;
