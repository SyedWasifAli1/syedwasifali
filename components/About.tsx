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
      className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-100 text-center overflow-hidden"
      id="about"
    >
      {/* 🔮 Subtle 3D Pastel Blobs for Background */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-cyan-200 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-25 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-pink-200 opacity-20 rounded-full blur-2xl animate-spin-slow z-0" />

      {/* ✨ Section Heading with Gradient Text */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-10 z-10 relative bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* 🧊 Glassmorphism Card with Hover Effect */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl px-8 py-12 text-gray-800 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-lg md:text-xl leading-relaxed">
          I&apos;m a full stack developer specializing in Flutter, Next.js, MERN/MEAN, Firebase, and Python AI. I build modern, scalable web & mobile applications that are visually appealing, responsive, and client-ready. My goal is to craft digital experiences that captivate users and elevate business growth.
        </p>
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
