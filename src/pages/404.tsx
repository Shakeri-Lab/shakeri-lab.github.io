import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Shakeri Lab</title>
      </Head>

      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/logo-square.jpeg"
              alt="Shakeri Lab Logo"
              width={88}
              height={88}
              className="mx-auto h-[88px] w-[88px] rounded-xl object-cover"
            />
          </div>

          <h1 className="mb-4 text-6xl font-bold">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-[var(--muted-strong)]">
            Page Not Found
          </h2>
          <p className="mx-auto mb-8 max-w-md text-[var(--muted)]">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-[var(--link)] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
