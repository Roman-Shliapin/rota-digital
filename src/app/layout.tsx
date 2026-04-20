import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/features/landing/components/Footer/Footer";
import "./globals.css";
import layoutCss from "./layout.module.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ROTA advancement",
  description: "Cyfrowe prezenty, które zapadają w pamięć",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#ffffff",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${spaceGrotesk.variable}`}>
      <body className={layoutCss.body}>
        <div className={layoutCss.content}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
