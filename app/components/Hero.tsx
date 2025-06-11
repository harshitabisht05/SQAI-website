export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex items-center justify-center px-6"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-blue-600">Sentienta</span>
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          Building the future of Quality AI — clean, fast, and precise.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 hover:dark:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
