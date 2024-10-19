import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Jost } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import cx from "classnames";
import { Navbar } from '../components/Navbar';
import { CenterContent } from '../components/CenterContent';
import { RightSidebar } from '../components/RightSidebar';

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={cx('text-black bg-white dark:text-white dark:bg-[#111010]', jost.className)}
      >
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between ">
            <main className="flex flex-row mt-8">
              <Navbar />
              <div className="basis-4/5 w-full flex flex-row">
                <CenterContent>{children}</CenterContent>
                <RightSidebar />
              </div>
            </main>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}