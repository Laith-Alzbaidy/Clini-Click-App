import Cookies from "js-cookie";
import { NextResponse } from "next/client";

function MyApp({ Component, pageProps }) {
  // Add a simple console.log statement
  console.log("Middleware executed");

  // Your middleware logic here
  let verify = Cookies.get("token");
  let url = window.location.pathname;

  if (!verify && url.includes("/payment")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (verify && url === "/") {
    return NextResponse.redirect("http://localhost:3000/dashboard");
  }

  return <Component {...pageProps} />;
}

export default MyApp;
