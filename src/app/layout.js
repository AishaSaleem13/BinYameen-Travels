import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Inter,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-voice",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL("https://binyameentravel.pk"),

  title: {
    default: "Bin Yameen Travels | Umrah & Travel Packages in Pakistan",
    template: "%s | Bin Yameen Travels",
  },


  description:
    "Explore Umrah, northern Pakistan and international travel packages with Bin Yameen Travels. Plan your journey with trusted travel services from Pakistan.",

  keywords: [
    "Bin Yameen Travels",
    "Umrah packages Pakistan",
    "Umrah packages Karachi",
    "Umrah travel agency",
    "Northern Pakistan tours",
    "Pakistan travel packages",
    "international tour packages",
  ],

  authors: [{ name: "Bin Yameen Travels" }],
  creator: "Bin Yameen Travels",
  publisher: "Bin Yameen Travels",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Bin Yameen Travels | Umrah & Travel Packages in Pakistan",
    description:
      "Explore Umrah, northern Pakistan and international travel packages with Bin Yameen Travels.",
    url: "https://binyameentravel.pk",
    siteName: "Bin Yameen Travels",
    locale: "en_PK",
    type: "website",
   
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}