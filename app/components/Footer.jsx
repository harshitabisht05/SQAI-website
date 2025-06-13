export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-neutral-800 text-center text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Sentienta QualityAI. All rights reserved.
        </p>
        <p className="mt-2">
          Built with ❤️ using Next.js, TailwindCSS, and thoughtful design.
        </p>
      </div>
    </footer>
  );
}
