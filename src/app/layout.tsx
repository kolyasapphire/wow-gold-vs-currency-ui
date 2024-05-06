import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import Coin from "../imgs/inv_misc_coin_01.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "World of Warcraft Gold vs. Fiat Currency",
  description:
    "App to see how USD value of World of Warcraft gold compares to conversion rate of various fiat currencies.",
};

const Header = () => (
  <div className="flex flex-col items-center justify-center">
    <Image
      src={Coin}
      alt="World of Warcraft gold coins"
      style={{ borderRadius: "14px" }}
    />
    <h1 className="pt-3">World of Warcraft Gold vs. Fiat Currency</h1>
  </div>
);

const Footer = () => (
  <div className="flex flex-col items-center justify-center">
    <div>
      Powered by{" "}
      <a
        href="https://develop.battle.net"
        target="_blank"
        rel="noreferrer"
        className="text-yellow-500"
      >
        Blizzard API
      </a>
    </div>
    <div>
      Made by{" "}
      <a
        href="https://ks.gg"
        target="_blank"
        rel="noreferrer"
        className="text-yellow-500"
      >
        kolyasapphire
      </a>
    </div>
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen w-screen flex-col items-center justify-center">
          <Header />
          <div className="py-3">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
