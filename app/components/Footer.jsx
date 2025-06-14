export default function Footer() {
  return (
    <footer className="bg-black dark:bg-neutral-900 text-white dark:text-gray-400 py-6 text-center">
      <div className="max-w-6xl mx-auto px-4" style={{ fontFamily: 'Eurostile' }}>
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <a 
            href="https://www.linkedin.com/company/quality-ai-io/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline text-blue-400 hover:text-blue-300"
          >
            Sentienta QualityAI
          </a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
