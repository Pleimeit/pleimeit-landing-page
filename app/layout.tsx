import "./globals.css";
import { Raleway, Bebas_Neue, Inter } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-raleway",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata = {
  title: "Conecta con nuevas personas a través del deporte",
  description: "Pleimeit es la app deportiva que conecta personas a través del deporte. Crea tus propios eventos o únete a uno de ellos.",
  openGraph: {
    title: "Conecta con nuevas personas a través del deporte",
    description: "Pleimeit es la app deportiva que conecta personas a través del deporte. Crea tus propios eventos o únete a uno de ellos.",
    url: "https://pleimeit.com",
    siteName: "Pleimeit",
    images: [
      {
        src: "/images/home/Logo-Pleimeit.png",
        width: 1200,
        height: 630,
        alt: "Logo de Pleimeit, app deportiva",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PXRK6HZW');
            `,
          }}
        />
      </head>
      <body
        className={`
          ${raleway.variable}
          ${inter.variable}
          ${bebas.variable}
        `}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXRK6HZW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        {children}
      </body>
    </html>
  );
}
