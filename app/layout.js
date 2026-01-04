import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BitLinks – Your URL Shortener",
  description: "BitLinks helps you shorten your URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-white 
          bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),
          linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
          bg-[length:6rem_4rem]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]" />
        </div>

        {children}
      </body>
    </html>
  );
}

