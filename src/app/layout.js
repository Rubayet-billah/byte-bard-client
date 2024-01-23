import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import ProviderComponent from "@/components/wrapper/Provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Byte Bard",
  description: "A simple unique blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProviderComponent>
        <body className={`${montserrat.className} `}>
          <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-12">
            <Header />
            <section className="py-5">{children}</section>
            <Toaster />
          </div>
        </body>
      </ProviderComponent>
    </html>
  );
}
