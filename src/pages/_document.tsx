import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Shakeri Lab - Machine Learning & Control Systems Research" />
        <meta
          name="description"
          content="Shakeri Lab at University of Virginia specializes in machine learning, control systems, and dynamical systems for biomedical applications including smart artificial pancreas systems and single-cell signaling dynamics."
        />
        <meta name="keywords" content="machine learning, control systems, dynamical systems, biomedical, artificial pancreas, single-cell, UVA, research lab" />
        <meta name="author" content="Heman Shakeri" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shakeri-lab.github.io/" />
        <meta property="og:title" content="Shakeri Lab - Machine Learning & Control Systems Research" />
        <meta
          property="og:description"
          content="Shakeri Lab at University of Virginia specializes in machine learning, control systems, and dynamical systems for biomedical applications."
        />
        <meta property="og:image" content="https://shakeri-lab.github.io/dynamo-lab-logo.png" />
        <meta property="og:site_name" content="Shakeri Lab" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shakeri-lab.github.io/" />
        <meta property="twitter:title" content="Shakeri Lab - Machine Learning & Control Systems Research" />
        <meta
          property="twitter:description"
          content="Shakeri Lab at University of Virginia specializes in machine learning, control systems, and dynamical systems for biomedical applications."
        />
        <meta property="twitter:image" content="https://shakeri-lab.github.io/dynamo-lab-logo.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://shakeri-lab.github.io/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/dynamo-lab-logo.png" />

        {/* Theme Color */}
        <meta name="theme-color" content="#002862" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
