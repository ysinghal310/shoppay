import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Form, Formik } from "formik";
import LoginInput from "../components/inputs/loginInput";
import { useState } from "react";
import * as Yup from "yup";
import CircledIonButton from "../components/buttons/circledIconButton";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
} from "next-auth/react";
import axios from "axios";
import CustomDotLoader from "../components/loaders/dotLoader";
import Router from "next/router";
import { toast } from "react-toastify";

const country = {
  name: "India",
  flag: "https://ipgeolocation.io/static/flags/in_64.png",
  currency: "INR",
};

const initialValues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
  message: "",
  success: "",
  error: "",
  login_error: "",
};

const Signin = ({ providers = [], callbackUrl, csrfToken }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialValues);
  const {
    login_email,
    login_password,
    name,
    email,
    password,
    conf_password,
    success,
    error,
    login_error,
  } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is required")
      .email("Please enter a valid email address"),
    login_password: Yup.string().required("Please enter a password"),
  });

  const registerValidation = Yup.object({
    name: Yup.string()
      .required("What's your name")
      .min(2, "Name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]/, "Numbers and special character are not allowed"),
    email: Yup.string()
      .required("Email address is required")
      .email("Please enter a valid email address"),
    password: Yup.string()
      .required("Please enter a password")
      .min(6, "Password must be atleast 6 characters")
      .max(36, "Password can't be more than 36 characters"),
    conf_password: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Password must match."),
  });

  const signUpHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      setLoading(false);

      let options = {
        redirect: false,
        email: email,
        password: password,
      };
      const res = await signIn("credentials", options);
      setUser({ ...user, success: "", error: "" });
      Router.push("/");
      setTimeout(() => {
        toast.info(data.message);
      }, 3000);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const signInHandler = async () => {
    setLoading(true);
    let options = {
      redirect: false,
      email: login_email,
      password: login_password,
    };
    const res = await signIn("credentials", options);
    setUser({ ...user, success: "", error: "" });
    setLoading(false);
    if (res?.error) {
      setLoading(false);
      setUser({ ...user, login_error: res?.error });
    } else {
      return Router.push(callbackUrl || "/");
    }
  };

  return (
    <>
      <Header country={country} />
      {loading && <CustomDotLoader loading={loading} />}
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We&apos;d be happy to join us! <Link href="/">Go Store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign In</h1>
            <p>
              Get access to one of the best E-shopping services in the world
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
              onSubmit={() => {
                signInHandler();
              }}
            >
              {(form) => (
                <Form method="post" action="/api/auth/signin/email">
                  <input
                    type="hidden"
                    name="csrfToken"
                    defaultValue={csrfToken}
                  />
                  <LoginInput
                    type="text"
                    name="login_email"
                    icon="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="login_password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <CircledIonButton type="submit" text="Sign In" />
                  {login_error && (
                    <span className={styles.error}>{login_error}</span>
                  )}
                  <div className={styles.forgot}>
                    <Link href="/auth/forgot">Forgot password?</Link>
                  </div>
                </Form>
              )}
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or continue with</span>
              <div className={styles.login__socials__wrap}>
                {providers.map((provider) => {
                  if (provider.name === "Credentials") {
                    return;
                  } else
                    return (
                      <div key={provider.name}>
                        <button
                          className={styles.social__btn}
                          onClick={() => signIn(provider.id)}
                        >
                          <img
                            src={`/${provider.name}.png`}
                            alt={provider.name}
                          />
                          {`Sign In with ${provider.name}`}
                        </button>
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign Up</h1>
            <p>
              Get access to one of the best E-shopping services in the world
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                name,
                email,
                password,
                conf_password,
              }}
              validationSchema={registerValidation}
              onSubmit={() => {
                signUpHandler();
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="name"
                    icon="user"
                    placeholder="Full Name"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="text"
                    name="email"
                    icon="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="conf_password"
                    icon="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                  />
                  <CircledIonButton type="submit" text="Sign Up" />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  );
};

export default Signin;

export async function getServerSideProps(context) {
  const { req, query } = context;
  const session = await getSession({ req });
  const { callbackUrl } = query;

  if (session) {
    return {
      redirect: {
        destination: callbackUrl,
      },
    };
  }
  const csrfToken = await getCsrfToken(context);
  const providers = Object.values(await getProviders());

  return {
    props: { providers, csrfToken, callbackUrl },
  };
}

//this is dev

