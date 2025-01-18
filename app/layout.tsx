import type { Metadata } from "next";
import "./globals.css";
import cx from "classnames";
import localFont from 'next/font/local'
import { Navbar } from '../components/Navbar';

const yourFont = localFont({
  src: [
    {
      path: '../public/fonts/futura/Futura Std Bold Oblique.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/futura/Futura Std Bold Oblique.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-yourFont',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffreysaeteros.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Jeffrey Saeteros',
    template: '%s | Jeffrey Saeteros',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]")}
    >
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex px-8">
          <Navbar />
          <div className="flex flex-col overflow-y-auto scrollbar-hide">
            <main className="flex-grow p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}