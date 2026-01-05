import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "./Components/Navber/Navber";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Depot Store",
  description: "Modern furniture store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Common Navbar - shop, landing, contract pages e dekhabe */}
        <Navber />
        
        {children}
      </body>
    </html>
  );
}