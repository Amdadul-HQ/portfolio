import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AnimateCurse from "@/components/AnimateCurse";

const poppins = Poppins({ subsets: ["latin"], weight: ['100','200','300','400','500','600','700'],});

export const metadata = {
  title: "Amdadul HQ | Portfolio",
  description: "Generated Your Web site with next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={poppins.className}>
        <AnimateCurse/>
        <header className="max-w-screen-xl mx-auto">
          <Navbar />
        </header>
        <main className="max-w-screen-xl mx-auto">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
