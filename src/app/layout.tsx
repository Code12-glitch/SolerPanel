import "../style/index.scss";
import Script from "next/script";

export const metadata = {
  title: "SolerPanel - Solar & Renewable Energy",
  description:
    "Modern solar and renewable energy solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap"
        />

        {/* Owl Carousel CSS */}
        <link
          rel="stylesheet"
          href="/assets/css/owl.carousel.min.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/owl.theme.default.min.css"
        />
      </head>

      <body>
        {children}

        {/* jQuery MUST load first */}
        <Script
          id="jquery"
          src="/assets/js/jquery.min.js"
          strategy="beforeInteractive"
        />

        {/* Owl Carousel MUST load after jQuery */}
        <Script
          id="owl-carousel"
          src="/assets/js/owl.carousel.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}