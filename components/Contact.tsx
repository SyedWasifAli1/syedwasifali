export default function Contact() {
    return (
      <section className="py-20 px-6 bg-black text-center" id="contact">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Contact</h2>
        <p className="text-lg text-gray-300 mb-6">Let's work together — feel free to reach out!</p>
        <a
          href="mailto:yourname@email.com"
          className="inline-block bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
        >
          Say Hello
        </a>
      </section>
    );
  }
  