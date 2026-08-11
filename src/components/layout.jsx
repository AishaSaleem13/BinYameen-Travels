import { Playfair_Display, Dancing_Script, Inter } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-script",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Crafted Escapes",
  description: "Luxury travel agency landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dancingScript.variable} ${inter.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}