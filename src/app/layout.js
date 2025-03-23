import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="photographer-attribution"
          content="Photography by Simon Berger, used under the Unsplash License."
        />
        <meta
          name="api-attribution"
          content="Data provided by the Meteo.lt API from the Lithuanian Hydrometeorological Service (LHMT), licensed under Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0), https://api.meteo.lt/"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
