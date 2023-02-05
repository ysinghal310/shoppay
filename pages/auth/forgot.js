import styles from "../../styles/Forgot.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { BiLeftArrowAlt } from "react-icons/bi";
import CircledIonButton from "../../components/buttons/circledIconButton";
import LoginInput from "../../components/inputs/loginInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import CustomDotLoader from "../../components/loaders/dotLoader";

const forgot = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required")
      .email("Please enter a valid email address"),
  });

  const forgotHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/forgot", {
        email,
      });

      setError("");
      setSuccess(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <>
      {loading && <CustomDotLoader loading={loading} />}
      <Header
        country={{
          name: "India",
          flag: "https://ipgeolocation.io/static/flags/in_64.png",
          currency: "INR",
        }}
      />
      <div className={styles.forgot}>
        <div className={styles.forgot__container}>
          <div className={styles.forgot__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Forgot your password ? <Link href="/">Login instead</Link>
            </span>
          </div>
          <Formik
            enableReinitialize
            initialValues={{
              email,
            }}
            validationSchema={emailValidation}
            onSubmit={() => {
              forgotHandler();
            }}
          >
            {(form) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  icon="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CircledIonButton type="submit" text="Send Link" />
                <div style={{ marginTop: "10px" }}>
                  {error && <span className={styles.error}>{error}</span>}
                  {success && <span className={styles.success}>{success}</span>}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer
        country={{
          name: "India",
          flag: "https://ipgeolocation.io/static/flags/in_64.png",
          currency: "INR",
        }}
      />
    </>
  );
};

export default forgot;
