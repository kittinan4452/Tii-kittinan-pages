import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar"
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KITTINAN | RESUME",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-[#181818]" lang="en">
      
      <link
  rel="icon"
  href="/icon?/image/icontitle/icons8.png"
  type="image/png"
  sizes="32x32"
/>
      <body className={inter.className}  >
      <div className=" min-w-full min-h-full">
      
      <Navbar/>
      {children}
      <Footer/>
      </div>


      
     </body>
    </html>
  );
}