'use client'
import React , {useState} from "react";
import InputField from "@/src/component/inputField/inputField";
import user from "../assets/user.svg";
import email from "../assets/email.svg";
import password from "../assets/password.svg";
import Btn from "@/src/component/button/button";
import styles from "../auth.module.css";
import Link from "next/link";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;

    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email, confirmPassword }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form submission successful:", data);
        router.push("/login?success=Account has been created");
      }
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <>
      <div className={styles.title}>Welcome to CliniClick</div>
      <form onSubmit={handleSubmit}>
        <InputField
          type={"text"}
          placeholder={"Enter your Firstname"}
          icon={user}
        />
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
        <InputField
          type={"password"}
          placeholder={"Confirm your Passsword"}
          icon={password}
        />
        {err && <div>{err}</div>}
        <Btn title={"Register"} type={"submit"} />
      </form>

      <div className={styles.login}>
        Already have an account ?{" "}
        <Link href={"/login"}>
          <span>Login here!</span>
        </Link>
      </div>
    </>
  );
};

export default Register;
