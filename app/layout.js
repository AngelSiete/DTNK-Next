import { Inter } from "next/font/google";
import Header from '@/components/header';
import Footer from '@/components/footer';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DITILENKO",
  description: "Artista de fuego",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-700">
      <body className={inter.className}>
      <Header/>
        {children}
      <Footer />
      </body>
    </html>
  );
}
