import type { Metadata } from "next";
import Script from "next/script";
import "./app.css";

const title = "Building a Better World - Matt Rigg";
const description = "Matt Rigg is a software engineer and entrepreneur based in Seattle who is using his skills to combat the climate crisis.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://mattrigg.dev"),
  openGraph: {
    title,
    description,
    url: "https://mattrigg.dev",
    siteName: "Matt Rigg",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JHW7QZX4TF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JHW7QZX4TF');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
