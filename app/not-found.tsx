import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center text-black dark:bg-zinc-900 dark:text-white">

      <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}
