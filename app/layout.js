import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Montserrat } from "next/font/google";
import Footer from "@/src/component/footer/footer";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "CliniClick",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      /> */}

      <body className={montserrat.className}>
        <div className="container1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
