import Link from "next/link"

export function LandingPageContent() {
  return (
    <div>
      <div className="container py-12 lg:py-20 grid gap-6 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Brett&apos;s Web Toolbox</h1>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            A collection of simple tools I made, all in one place. No accounts, no payments, just tools.
          </p>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold">QR Code Generator</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A QR Code Generator with simplistic configuration options.
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="/qr-generator"
            >
              View Tool
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold">Video Trimmer (Coming Soon)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Trim videos to a specific length, without needing to download any software.
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View Tool
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold">Markdown to PDF (Coming Soon)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Design and export your markdown files to PDF.
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View Tool
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
