// pages/_app.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isUserAuthenticated } from "@/auth/auth";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = isUserAuthenticated();
    console.log("00000000000000000", router.pathname);
    if (!isAuthenticated && !router.pathname.startsWith("/profile")) {
      // Redirect to the login page if not authenticated
      router.push("/login");
    }
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
