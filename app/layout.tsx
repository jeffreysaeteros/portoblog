import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local'
import { Sidebar } from './components/sidebar';

// const Futura = localFont({
//   src: [
//     {
//       path: '../public/fonts/futura/Futura Book.ttf',
//       weight: '300',
//     },
//     {
//       path: '../public/fonts/futura/Futura Std Medium.ttf',
//       weight: '400',
//     },
//     {
//       path: '../public/fonts/futura/Futura Bold.ttf',
//       weight: '700',
//     },
//   ],
//   variable: '--font-futura',
// });

const Futura = localFont({
  src: [
    // {
    //   path: '../public/fonts/futura/Futura Std Book.ttf',
    //   weight: '300',
    // },
    // {
    //   path: '../public/fonts/futura/Futura Std Heavy.ttf',
    //   weight: '700',
    // },
    {
      path: '../public/fonts/futura/Futura Std Medium.ttf',

    },
  ],
  variable: '--font-futura',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffreysaeteros.com/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Jeffrey Saeteros',
    template: '%s | Jeffrey Saeteros',
  },
  icons: {
    icon: '/endless.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${Futura.variable}`}>
      <body className={`antialiased tracking-tight bg-white ${Futura.className}`}>
        <div className=" flex min-h-screen">
          {/* Sidebar */}
          <div className="flex-shrink-0 sticky top-0 h-screen">
            <Sidebar />
          </div>

          {/* <div className="w-[1px] bg-gray-300"></div> */}

          {/* Main Content */}
          <div className="flex-grow overflow-y-auto pt-12">
            <div className="flex flex-col justify-between flex-1 p-8 ">
              <main className="max-w-[80ch] mx-auto w-full space-y-6">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}