import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/
export default function Home() {
  return (
    <div>
     <h1>The home page</h1>
     <ul>
      <li>
        <Link href="/portfolio">Portfolio</a>
      </li>
     </ul>
    </div>
  );
}
