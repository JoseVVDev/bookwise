import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise reviews",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={nunitoSans.className} lang='en'>
      <body className='h-screen bg-gray-800'>{children}</body>
    </html>
  );
}
