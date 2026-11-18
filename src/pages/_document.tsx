import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Shakeri Lab - Machine Learning & Control for Diabetes Technology" />
        <meta
          name="description"
          content="Shakeri Lab at the University of Virginia works from deep learning theory and control theory to clinical research, using foundation models, AI, and learning-based control, all focused on treating and curing diabetes."
        />
        <meta name="keywords" content="diabetes technology, deep learning, control theory, foundation models, artificial pancreas, automated insulin delivery, continuous glucose monitoring, machine learning, dynamical systems, PhD positions, UVA, research lab" />
        <meta name="author" content="Heman Shakeri" />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shakeri-lab.github.io/" />
        <meta property="og:title" content="Shakeri Lab - Machine Learning & Control for Diabetes Technology" />
        <meta
          property="og:description"
          content="Shakeri Lab at the University of Virginia: deep learning theory, control theory, and clinical research, all focused on treating and curing diabetes."
        />
        <meta property="og:image" content="https://shakeri-lab.github.io/logo-square.jpeg" />
        <meta property="og:image:alt" content="Shakeri Lab logo" />
        <meta property="og:site_name" content="Shakeri Lab" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shakeri-lab.github.io/" />
        <meta property="twitter:title" content="Shakeri Lab - Machine Learning & Control for Diabetes Technology" />
        <meta
          property="twitter:description"
          content="Shakeri Lab at the University of Virginia: deep learning theory, control theory, and clinical research, all focused on treating and curing diabetes."
        />
        <meta property="twitter:image" content="https://shakeri-lab.github.io/logo-square.jpeg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://shakeri-lab.github.io/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Shakeri Lab site summary" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/logo-square.png" />
        <link rel="apple-touch-icon" href="/logo-square.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#edf4ff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#050d1d" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
