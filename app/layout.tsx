import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Jost } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import cx from "classnames";
import { Navbar } from '../components/Navbar';

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({ subsets: ["latin"] });

function Footer() {
  const links = [
    { name: 'read.cv', url: 'https://read.cv/jeffreysaeteros' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/jeffrey-saeteros/' },
    { name: 'github', url: 'https://github.com/jeffreysaeteros' },
  ];

  return (
    <footer className="text-center">
      <div className="flex justify-center space-x-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-white text-black hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffreysaeteros.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Jeffrey Saeteros',
    template: '%s | Jeffrey Saeteros',
  },
  description: 'Developer, cyclist, amateur footballer, watch enthusiast.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        jost.className
      )}
    >
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8">
          <main className="flex">
            <Navbar />
            <main className="">{children}</main>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}