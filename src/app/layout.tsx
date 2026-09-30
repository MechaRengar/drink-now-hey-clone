import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { NewsletterStrip } from "@/components/newsletter-strip";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drinknowhey.com"),
  title: "nowhey – ready-to-drink flavoured protein water",
  description:
    "no compromise. no excuses. nowhey. designed to help you improve fitness, build muscle and lose body fat, nowhey contains 20g protein, ~82 calories and zero sugar.",
  keywords: [
    "nowhey",
    "protein water",
    "plant-based protein",
    "clear protein",
    "pea protein peptides",
    "zero sugar protein",
    "ready to drink protein",
    "low calorie protein",
  ],
  icons: {
    icon: "/images/nowhey_white.png",
  },
  openGraph: {
    title: "nowhey – flavoured protein water",
    description: "20g protein | 86 calories | zero sugar. no compromise.",
    url: "https://drinknowhey.com",
    siteName: "nowhey",
    images: [
      {
        url: "/images/desktopslideshowhero.jpg",
        width: 1200,
        height: 630,
        alt: "nowhey cans chilled in ice",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="bg-[#121212] text-white min-h-screen flex flex-col font-sans antialiased selection:bg-[#c6f91f] selection:text-black">
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <NewsletterStrip />
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
