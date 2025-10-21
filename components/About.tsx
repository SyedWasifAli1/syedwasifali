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
      id="about"
      className="relative py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-center overflow-hidden"
    >
      {/* 🌈 Floating Gradient Blobs */}
      <div className="absolute -top-40 -left-32 w-[30rem] h-[30rem] bg-cyan-300 opacity-25 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-400 opacity-25 rounded-full blur-3xl animate-float z-0" />
      <div className="absolute top-1/3 right-1/4 w-[22rem] h-[22rem] bg-pink-300 opacity-20 rounded-full blur-2xl animate-spin-slow z-0" />

      {/* ✨ Title with Neon Glow */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative text-5xl md:text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]"
      >
        About Me
      </motion.h2>

      {/* 🧊 Glass Card with Glow & Floating Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-3xl mx-auto bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-[0_8px_50px_rgba(0,0,0,0.1)] px-10 py-14 text-gray-800 transform transition-all duration-700 hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] hover:scale-[1.04] hover:border-purple-300/40"
      >
    <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, delay: 0.3 }}
  className="text-lg md:text-xl leading-relaxed font-medium text-gray-700"
>
  I’m a passionate{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold">
    Full Stack Developer & AI Agent Developer
  </span>{" "}
  specializing in{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-semibold">
    Next.js, MERN/MEAN, Firebase, OpenAI SDK, Python, and n8n
  </span>
  . I love crafting fast, scalable, and visually stunning digital experiences
  that connect users and help businesses grow with confidence.
</motion.p>


        {/* 💫 Subtle Glow Line */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-sm rounded-full opacity-60" />
      </motion.div>
    </section>
  );
}



// 'use client';

// import { motion } from 'framer-motion';

// export default function About() {
//   return (
//     <section
//       className="relative py-24 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center overflow-hidden"
//       id="about"
//     >
//       {/* 🔮 3D Gradient Glow Behind Card */}
//       <div className="absolute -top-32 -left-20 w-96 h-96 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse-slow z-0" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

//       {/* ✨ Section Heading with Animation */}
//       <motion.h2
//         className="text-4xl font-bold text-cyan-400 mb-10 z-10 relative"
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         About Me
//       </motion.h2>

//       {/* 🧊 Card Animation */}
//       <motion.div
//         className="relative z-10 max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg px-8 py-10 text-gray-300 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//       >
//         <p className="text-lg leading-relaxed">
//   I'm a full stack developer skilled in Flutter, Next.js, MERN/MEAN, Firebase, and Python AI — building modern, scalable web & mobile apps.
// </p>

//       </motion.div>
//     </section>
//   );
// }
