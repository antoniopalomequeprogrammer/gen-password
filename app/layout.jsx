import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: "next, react, tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200`}>
        <header className="bg-white px-6 shadow">
          
      <Navigation />
        </header>
        {children}
        
        
        </body>
    </html>
  );
}