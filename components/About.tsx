// export default function About() {
//     return (
//       <section
//         className="relative py-24 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center overflow-hidden"
//         id="about"
//       >
//         {/* 🔮 3D Gradient Glow Behind Card */}
//         <div className="absolute -top-32 -left-20 w-96 h-96 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse-slow z-0" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
  
//         {/* ✨ Section Heading */}
//         <h2 className="text-4xl font-bold text-cyan-400 mb-10 z-10 relative">About Me</h2>
  
//         {/* 🧊 Glassmorphic Card */}
//         <div className="relative z-10 max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg px-8 py-10 text-gray-300 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
//           <p className="text-lg leading-relaxed">
//             I'm a passionate developer who loves crafting interactive UIs with a perfect blend of creativity and functionality.
//             Focused on frontend 3D, animations, and smooth UX – I bring interfaces to life with every project I touch.
//           </p>
//         </div>
//       </section>
//     );
//   }
  


'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="relative py-24 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center overflow-hidden"
      id="about"
    >
      {/* 🔮 3D Gradient Glow Behind Card */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      {/* ✨ Section Heading with Animation */}
      <motion.h2
        className="text-4xl font-bold text-cyan-400 mb-10 z-10 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* 🧊 Card Animation */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg px-8 py-10 text-gray-300 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-lg leading-relaxed">
          I'm a passionate developer who loves crafting interactive UIs with a perfect blend of creativity and functionality.
          Focused on frontend 3D, animations, and smooth UX – I bring interfaces to life with every project I touch.
        </p>
      </motion.div>
    </section>
  );
}
