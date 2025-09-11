'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-100 text-center overflow-hidden" id="contact">
      {/* 🔵 Background Animated Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl animate-pulse-slow rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-purple-500 opacity-15 blur-2xl animate-spin-slow rounded-full"></div>
      </div>

      {/* ✨ Content Card */}
      <motion.div
        className="relative z-10 max-w-xl mx-auto bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
          Contact Me
        </h2>
        <p className="text-gray-800 text-lg mb-8">
          Let&apos;s collaborate! Feel free to reach out for projects, freelance work, or just to say hi.
        </p>

        <a
          href="mailto:syedwasifali080@email.com"
          className="inline-block bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
