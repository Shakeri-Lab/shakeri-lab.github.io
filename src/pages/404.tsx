import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Shakeri Lab</title>
      </Head>

      <div className="min-h-screen bg-background dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/dynamo-lab-logo.png"
              alt="Shakeri Lab Logo"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>

          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
