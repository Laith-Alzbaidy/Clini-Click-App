import React from "react";
import InputField from "@/src/component/inputField/inputField";
import user from '../assets/user.svg'
import email from '../assets/email.svg'
import password from '../assets/password.svg'
import Btn from "@/src/component/button/button";
import styles from '../auth.module.css';
import Link from "next/link";

const Login = () => {
  return (
    <>
    <div className={styles.title}>Welcome to CliniClick</div>
      
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
        <div className={styles.login}>haven't an account ? <Link href={'/register'}><span>Register here!</span></Link></div>
    </>

  )
}

export default Login