import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Byte Bard",
  description: "A simple unique blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} `}>
        <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-12">
          <Header />

          <section className="py-5">{children}</section>
        </div>
      </body>
    </html>
  );
}
