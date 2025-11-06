import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Space_Grotesk } from "next/font/google";

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${bodyFont.variable} ${headingFont.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
