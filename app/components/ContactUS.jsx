export default function ContactUS() {
  return (
    <section
      id="contactus"
      className="bg-white dark:bg-neutral-900 py-20 px-6 text-center text-gray-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact Sentienta</h2>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
          Whether you have a question, a project idea, or just want to say hi —
          we'd love to hear from you.
        </p>
        <a
          href="mailto:contact@sentienta.ai"
          className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full hover:bg-gray-800 hover:dark:bg-gray-200 transition"
        >
          Send Message
        </a>
      </div>
    </section>
  );
}
