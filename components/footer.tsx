'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-gray-900 text-center text-white overflow-hidden">
      {/* ✨ Glow effect behind footer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-16 left-1/4 w-72 h-72 bg-cyan-500 opacity-10 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-16 right-1/3 w-96 h-96 bg-pink-500 opacity-10 blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Footer Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-lg">© {new Date().getFullYear()} Syed Wasif Ali</p>
          <a
            href="mailto:syedwasifali080@email.com"
            className="inline-block px-5 py-2 border border-cyan-500 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/SyedWasifAli1"
            target="_blank"
            className="text-white hover:text-cyan-500 text-2xl transition transform hover:scale-110"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/syedwasifali/"
            target="_blank"
            className="text-white hover:text-blue-600 text-2xl transition transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/syedwasifali080"
            target="_blank"
            className="text-white hover:text-blue-400 text-2xl transition transform hover:scale-110"
            title="Twitter"
          >
            <FaTwitter />
          </a>
          {/* <a
            href="https://instagram.com/"
            target="_blank"
            className="text-white hover:text-pink-500 text-2xl transition transform hover:scale-110"
            title="Instagram"
          >
            <FaInstagram />
          </a> */}
        </div>
      </motion.div>

      {/* Bottom Line */}
      <div className="relative z-10 mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
        Designed & Built by Syed Wasif Ali | Modern Portfolio 2025
      </div>
    </footer>
  );
}
