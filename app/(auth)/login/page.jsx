'use client'
import React from "react";
import InputField from "@/src/component/inputField/inputField";
import email from "../assets/email.svg";
import password from "../assets/password.svg";
import Btn from "@/src/component/button/button";
import styles from "../auth.module.css";
import Link from "next/link";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter
const session = useSession()
if (session.status == "loading"){
  return <p>loading</p>
}
if(session.status === "authenticated" ){
  router.push('/')
}
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn('credentials' , {email , password})
  
  };
  return (
    <>
      <div className={styles.title}>Welcome to CliniClick</div>

      <form onSubmit={handleSubmit}>
        <InputField
          type={"email"}
          placeholder={"Enter your Email"}
          icon={email}
        />
        <InputField
          type={"password"}
          placeholder={"Enter your Passsword"}
          icon={password}
        />
        <Btn title={"Register"} />
      </form>
      <div className={styles.login}>
        haven't an account ?{" "}
        <Link href={"/register"}>
          <span>Register here!</span>
        </Link>
      </div>
    </>
  );
};

export default Login;
