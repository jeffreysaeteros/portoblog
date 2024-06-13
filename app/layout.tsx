import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.css";
import cx from "classnames";
import { Navbar } from "./components/NavBar";


const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeffrey Saeteros",
  description: "Developer, cyclist, amateur footballer",
};

export default function RootLayout({
  children,
}:
  Readonly<{ children: React.ReactNode; }>) {
  return (
    <html
      lang="en"
      className={cx('text-black bg-white dark:text-white dark:bg-[#111010]', jost.className)}
    >
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
